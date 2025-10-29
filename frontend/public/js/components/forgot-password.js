document.addEventListener("DOMContentLoaded", function () {
    const forgotContainer = document.querySelector(".forgot-password__container");
  
    if (forgotContainer) {
      fetch("/frontend/public/views/components/forgot-password.html")
        .then(response => response.text())
        .then(data => {
          forgotContainer.innerHTML = data;
        })
        .catch(error => console.error("Error cargando el formulario de recuperación:", error));
    }
  });
  
function mostrarAlerta(event) {
  event.preventDefault(); // Evita que el formulario se envíe
  alert("¡Código enviado correctamente!");
  window.location.href = "/frontend/public/views/reset_password.html";
}