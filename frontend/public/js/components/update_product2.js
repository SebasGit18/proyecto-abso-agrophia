document.addEventListener("DOMContentLoaded", function() {
  const productContainer = document.querySelector(".update-product2");

  if (productContainer) {
    fetch("/frontend/public/views/components/update_product2.html")
      .then(response => {
        if (!response.ok) {
          throw new Error("Error al cargar el componente");
        }
        return response.text();
      })
      .then(html => {
        // Insertamos el HTML del componente
        productContainer.innerHTML = html;

        // Seleccionamos los elementos del nuevo contenido
        const saveButton = productContainer.querySelector("#btn-save");
        const successMessage = productContainer.querySelector("#success-message");

        if (saveButton && successMessage) {
          saveButton.addEventListener("click", () => {
            successMessage.classList.add("update-product__message--show");

            setTimeout(() => {
              successMessage.classList.remove("update-product__message--show");
              window.location.href = "/frontend/public/views/interface_farmer.html";
            }, 2000);
          });
        } else {
          console.warn("No se encontró el botón o el mensaje dentro del componente cargado.");
        }
      })
      .catch(error => console.error("Error cargando el formulario de actualizar producto:", error));
  } else {
    console.error("No se encontró el contenedor .update-product2 en el HTML principal.");
  }
});
