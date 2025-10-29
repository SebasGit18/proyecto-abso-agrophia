// ================================
// GENERADOR DE REPORTE DE TIENDAS - Agrophia
// ================================

// ====== CARGAR COMPONENTE DINÁMICO ======
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".generate-shop-report");

  if (!container) {
    console.warn("⚠️ No se encontró el contenedor .generate-shop-report en el DOM.");
    return;
  }

  fetch("/frontend/public/views/components/generate-shop-report.html")
    .then(response => response.text())
    .then(data => {
      container.innerHTML = data;
      console.log("Componente de reporte de tiendas cargado correctamente.");

      // Esperar a que el HTML se renderice completamente antes de inicializar
      setTimeout(initShopReport, 300);
    })
    .catch(error => {
      console.error("Error cargando el componente de reporte de tiendas:", error);
    });
});

// ====== FUNCIÓN PRINCIPAL ======
function initShopReport() {
  const rows = document.querySelectorAll(".shop-report__body tr");

  if (rows.length === 0) {
    console.warn("No se encontraron filas en el reporte de tiendas.");
    return;
  }

  let activeCount = 0;
  let inactiveCount = 0;

  // Contar tiendas activas / inactivas
  rows.forEach(row => {
    const status = row.querySelector(".shop-report__status")?.textContent.trim();
    if (status === "Activa") activeCount++;
    else if (status === "Inactiva") inactiveCount++;
  });

  // ====== Crear gráfico ======
  const chartCanvas = document.getElementById("shop-report__chart");
  if (chartCanvas && typeof Chart !== "undefined") {
    new Chart(chartCanvas, {
      type: "bar",
      data: {
        labels: ["Activas", "Inactivas"],
        datasets: [
          {
            label: "Tiendas",
            data: [activeCount, inactiveCount],
            backgroundColor: ["#9eff90", "#BEBEBE"]
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
          title: {
            display: true,
            text: "Estado de tiendas en el sistema",
            font: { size: 14, weight: "bold" }
          }
        },
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  } else {
    console.warn("Chart.js no está disponible o no se encontró el canvas del reporte de tiendas.");
  }

  // ====== Botón para generar PDF ======
  const btnPDF = document.getElementById("btn-generar-pdf");
  if (btnPDF) {
    btnPDF.addEventListener("click", generateShopPDF);
  } else {
    console.warn("No se encontró el botón para generar PDF del reporte de tiendas.");
  }
}

// ====== FUNCIÓN PARA GENERAR PDF ======
function generateShopPDF() {
  const reportElement = document.getElementById("contenido-reporte");
  if (!reportElement) {
    console.error("No se encontró el contenido del reporte de tiendas para exportar.");
    return;
  }

  if (typeof html2pdf === "undefined") {
    console.error("La librería html2pdf no está cargada.");
    return;
  }

  const options = {
    margin: 0.5,
    filename: "reporte_tiendas_agrophia.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
  };

  html2pdf().set(options).from(reportElement).save();
}
