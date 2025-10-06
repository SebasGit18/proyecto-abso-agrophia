document.addEventListener("DOMContentLoaded", function () {
    const forgotContainer = document.querySelector(".forgot-password");
  
    if (forgotContainer) {
      fetch("/frontend/public/views/components/forgot-password.html")
        .then(response => response.text())
        .then(data => {
          forgotContainer.innerHTML = data;
        })
        .catch(error => console.error("Error cargando el formulario de recuperación:", error));
    }
  });
  