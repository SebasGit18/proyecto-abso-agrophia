document.addEventListener("DOMContentLoaded", function () {
    const pagoContainer = document.querySelector(".pago__container-wrapper");
  
    if (pagoContainer) {
      fetch("/frontend/public/views/components/from.html")
        .then(response => response.text())
        .then(data => {
          pagoContainer.innerHTML = data;
        })
        .catch(error => console.error("Error cargando el formulario de pago:", error));
    }
  });
  