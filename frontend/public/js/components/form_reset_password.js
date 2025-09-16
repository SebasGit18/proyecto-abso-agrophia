document.addEventListener("DOMContentLoaded", function () {
  const resetElement = document.querySelector(".reset__form");

if (resetElement) {
    fetch("/frontend/public/views/components/form_reset_password.html")
      .then(response => response.text())
      .then(data => {
        resetElement.innerHTML = data;

        })
    .catch(error => console.error("Error cargando el forms", error));

    }
});
