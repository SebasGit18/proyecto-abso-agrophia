document.addEventListener("DOMContentLoaded", function () {
  const registerElement = document.querySelector(".form-container");

  if (registerElement) {
    fetch("/frontend/public/views/components/register.html")
      .then(response => response.text())
      .then(data => {
        registerElement.innerHTML = data;

        // Una vez insertado el formulario, seleccione los elementos de nuevo.
        const passwordInput = document.getElementById("password");
        const showPasswordCheckbox = document.getElementById("mostrar");

        if (passwordInput && showPasswordCheckbox) {
          showPasswordCheckbox.addEventListener("change", () => {
            passwordInput.type = showPasswordCheckbox.checked ? "text" : "password";
          });
        }
      })
      .catch(error => console.log("Error al cargar el formulario de registro", error));
  }
});