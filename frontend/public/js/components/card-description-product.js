document.addEventListener("DOMContentLoaded", function () {
  const cardDescriptionProductElement = document.querySelector(".card__description-container");

  if (cardDescriptionProductElement) {
    fetch("/frontend/public/views/components/card-description-product.html")
      .then((response) => response.text())
      .then((data) => {
        // Insertar el componente HTML
        cardDescriptionProductElement.innerHTML = data;

        // Luego de cargar el HTML, inicializamos la lógica de las imágenes
        initializeProductImageGallery();
      })
      .catch((error) => console.log("Error cargando la descripción del producto.", error));
  }

  // === Función para inicializar el cambio de imágenes ===
  function initializeProductImageGallery() {
    const mainImage = document.getElementById("main-image");
    const thumbnails = document.querySelectorAll(".product-view__thumbnail");

    if (!mainImage || thumbnails.length === 0) return;

    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("click", () => {
        // Cambiar la imagen principal
        mainImage.src = thumbnail.src;

        // Quitar borde activo de todas las miniaturas
        thumbnails.forEach((t) => t.classList.remove("product-view__thumbnail--active"));

        // Agregar borde activo a la seleccionada
        thumbnail.classList.add("product-view__thumbnail--active");

        // Pequeño efecto de transición (fade)
        mainImage.classList.add("fade");
        setTimeout(() => mainImage.classList.remove("fade"), 300);
      });
    });
  }
});
