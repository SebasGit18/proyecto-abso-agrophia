document.addEventListener("DOMContentLoaded", function () {
  const pagoContainer = document.querySelector(".method-payment__container");

  if (pagoContainer) {
    fetch("/frontend/public/views/components/from-method_payment.html")
      .then(response => response.text())
      .then(data => {
        pagoContainer.innerHTML = data;
      })
      .catch(error => console.error("Error cargando el formulario de pago:", error));
  }
});
