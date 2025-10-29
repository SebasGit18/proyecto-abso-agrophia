// ====== CARGAR COMPONENTE DINÁMICO ======
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".product-report-container");

  if (container) {
    fetch("/frontend/public/views/components/generate-product_report.html")
      .then(response => response.text())
      .then(data => {
        container.innerHTML = data;
        console.log("Componente de reporte de productos cargado correctamente.");

        // Esperar un pequeño tiempo para asegurar renderizado del HTML
        setTimeout(initProductReport, 300);
      })
      .catch(error =>
        console.error("Error cargando el componente de reporte de productos:", error)
      );
  } else {
    console.warn("No se encontró el contenedor .product-report-container en el DOM.");
  }
});

// ====== FUNCIÓN PRINCIPAL ======
function initProductReport() {
  const rows = document.querySelectorAll(".product-report__body tr");
  if (rows.length === 0) {
    console.warn("No se encontraron filas en el reporte de productos.");
    return;
  }

  let activeCount = 0;
  let inactiveCount = 0;

  // Contar productos activos / inactivos
  rows.forEach(row => {
    const status = row.querySelector(".product-report__status")?.textContent.trim();
    if (status === "Activo") activeCount++;
    else if (status === "Inactivo") inactiveCount++;
  });

  // ====== Crear gráfico ======
  const chartCanvas = document.getElementById("product-report__chart");
  if (chartCanvas && typeof Chart !== "undefined") {
    new Chart(chartCanvas, {
      type: "bar",
      data: {
        labels: ["Activos", "Inactivos"],
        datasets: [
          {
            label: "Productos",
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
            text: "Estado de productos en el sistema",
            font: { size: 14, weight: "bold" }
          }
        },
        scales: { y: { beginAtZero: true } }
      }
    });
  } else {
    console.warn("Chart.js no está disponible o no se encontró el canvas del reporte de productos.");
  }

  // ====== Botón PDF ======
  const btnPDF = document.getElementById("btn-generar-pdf");
  if (btnPDF) {
    btnPDF.addEventListener("click", generateProductPDF);
  } else {
    console.warn("No se encontró el botón para generar PDF del reporte de productos.");
  }
}

// ====== FUNCIÓN PARA GENERAR PDF ======
function generateProductPDF() {
  const reportElement = document.getElementById("contenido-reporte");
  if (!reportElement) {
    console.error("No se encontró el contenido del reporte de productos para exportar.");
    return;
  }

  if (typeof html2pdf === "undefined") {
    console.error("La librería html2pdf no está cargada.");
    return;
  }

  const options = {
    margin: 0.5,
    filename: "reporte_productos_agrophia.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
  };

  html2pdf().set(options).from(reportElement).save();
}
