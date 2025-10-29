document.addEventListener("DOMContentLoaded", function () {
  const loginContainer = document.querySelector(".container-login");

  if (loginContainer) {
    fetch("/frontend/public/views/components/forloggin.html")
      .then(response => response.text())
      .then(data => {
        loginContainer.innerHTML = data;
      })
      .catch(error => console.error("Error cargando la información del perfil:", error));
  }
});
