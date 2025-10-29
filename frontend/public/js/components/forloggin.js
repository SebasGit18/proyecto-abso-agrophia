document.addEventListener("DOMContentLoaded", function () {
  const perfilElement = document.querySelector(".profile-form-update-container");

  if (perfilElement) {
    fetch("/frontend/public/views/components/informacion_perfil.html")
      .then(response => response.text())
      .then(data => {
        perfilElement.innerHTML = data;
      })
      .catch(error => console.log("Error cargando el perfil", error));
  }
});

function mostrarAlerta(event) {
  event.preventDefault(); // Evita que el formulario se envíe
  alert("¡Inicio de sesión exitosamente!");
  window.location.href = "/frontend/public/views/interface_farmer.html";
}