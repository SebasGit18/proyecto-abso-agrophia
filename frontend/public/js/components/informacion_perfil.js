document.addEventListener("DOMContentLoaded", function () {
  const infoContainer = document.querySelector(".profile-form-update-container");

  if (infoContainer) {
    fetch("/frontend/public/views/components/informacion_perfil.html")
      .then(response => response.text())
      .then(data => {
        infoContainer.innerHTML = data;
      })
      .catch(error => console.error("Error cargando la información del perfil:", error));
  }
});
