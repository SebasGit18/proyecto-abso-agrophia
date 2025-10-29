// ====== CARGAR COMPONENTE DINÁMICO ======
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".table_users");

  if (container) {
    fetch("/frontend/public/views/components/generate-user_report.html")
      .then(response => response.text())
      .then(data => {
        container.innerHTML = data;
        console.log("Componente de reporte de usuarios cargado correctamente.");

        // Esperar un pequeño tiempo para asegurar renderizado del HTML
        setTimeout(initUserReport, 300);
      })
      .catch(error =>
        console.error("Error cargando el componente de reporte de usuarios:", error)
      );
  }
});

// ====== FUNCIÓN PRINCIPAL ======
function initUserReport() {
  const rows = document.querySelectorAll(".user-report__body tr");
  if (rows.length === 0) {
    console.warn("No se encontraron filas en el reporte de usuarios.");
    return;
  }

  let activeCount = 0;
  let inactiveCount = 0;

  rows.forEach(row => {
    const status = row.querySelector(".user-report__status")?.textContent.trim();
    if (status === "Activo") activeCount++;
    else if (status === "Inactivo") inactiveCount++;
  });

  // ====== Crear gráfico ======
  const chartCanvas = document.getElementById("user-report__chart");
  if (chartCanvas && typeof Chart !== "undefined") {
    new Chart(chartCanvas, {
      type: "bar",
      data: {
        labels: ["Activos", "Inactivos"],
        datasets: [
          {
            label: "Usuarios",
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
            text: "Estado de usuarios en el sistema",
            font: { size: 14, weight: "bold" }
          }
        },
        scales: { y: { beginAtZero: true } }
      }
    });
  } else {
    console.warn("Chart.js no está disponible o no se encontró el canvas.");
  }

  // ====== Botón PDF ======
  const btnPDF = document.getElementById("btn-generar-pdf");
  if (btnPDF) {
    btnPDF.addEventListener("click", generatePDF);
  } else {
    console.warn("No se encontró el botón para generar PDF.");
  }
}

// ====== FUNCIÓN PARA GENERAR PDF ======
function generatePDF() {
  const reportElement = document.getElementById("contenido-reporte");
  if (!reportElement) {
    console.error("No se encontró el contenido del reporte para exportar.");
    return;
  }

  if (typeof html2pdf === "undefined") {
    console.error("La librería html2pdf no está cargada.");
    return;
  }

  const options = {
    margin: 0.5,
    filename: "reporte_usuarios_agrophia.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
  };

  html2pdf().set(options).from(reportElement).save();
}
