// =======================================================
// =============== CARGAR COMPONENTE DINÁMICO =============
// =======================================================
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".order-report-container");

  if (!container) {
    console.warn("No se encontró el contenedor .order-report-container en el DOM.");
    return;
  }

  fetch("/frontend/public/views/components/generate-order_report.html")
    .then(response => response.text())
    .then(data => {
      container.innerHTML = data;
      console.log("✅ Componente de reporte de pedidos cargado correctamente.");

      // Esperar un pequeño tiempo para asegurar el renderizado completo del HTML
      setTimeout(initOrderReport, 300);
    })
    .catch(error =>
      console.error("❌ Error cargando el componente de reporte de pedidos:", error)
    );
});

// =======================================================
// =================== FUNCIÓN PRINCIPAL ==================
// =======================================================
function initOrderReport() {
  const rows = document.querySelectorAll(".order-report__body tr");

  if (rows.length === 0) {
    console.warn("⚠️ No se encontraron filas en el reporte de pedidos.");
    return;
  }

  let completedCount = 0;
  let pendingCount = 0;

  // Contar pedidos completados / pendientes
  rows.forEach(row => {
    const status = row.querySelector(".order-report__status")?.textContent.trim();
    if (status === "Completado") completedCount++;
    else if (status === "Pendiente") pendingCount++;
  });

  // =======================================================
  // ==================== CREAR GRÁFICO ====================
  // =======================================================
  const chartCanvas = document.getElementById("order-report__chart");

  if (chartCanvas && typeof Chart !== "undefined") {
    new Chart(chartCanvas, {
      type: "bar",
      data: {
        labels: ["Completados", "Pendientes"],
        datasets: [
          {
            label: "Pedidos",
            data: [completedCount, pendingCount],
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
            text: "Estado de pedidos en el sistema",
            font: { size: 14, weight: "bold" }
          }
        },
        scales: { y: { beginAtZero: true } }
      }
    });
  } else {
    console.warn("⚠️ Chart.js no está disponible o no se encontró el canvas del reporte de pedidos.");
  }

  // =======================================================
  // ================== BOTÓN PARA PDF =====================
  // =======================================================
  const btnPDF = document.getElementById("btn-generar-pdf");

  if (btnPDF) {
    btnPDF.addEventListener("click", generateOrderPDF);
  } else {
    console.warn("⚠️ No se encontró el botón para generar PDF del reporte de pedidos.");
  }
}

// =======================================================
// ============== FUNCIÓN PARA GENERAR PDF ================
// =======================================================
function generateOrderPDF() {
  const reportElement = document.getElementById("contenido-reporte");

  if (!reportElement) {
    console.error("❌ No se encontró el contenido del reporte de pedidos para exportar.");
    return;
  }

  if (typeof html2pdf === "undefined") {
    console.error("❌ La librería html2pdf no está cargada.");
    return;
  }

  const options = {
    margin: 0.5,
    filename: "reporte_pedidos_agrophia.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
  };

  html2pdf().set(options).from(reportElement).save();
}
