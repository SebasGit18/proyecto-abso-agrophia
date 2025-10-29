document.addEventListener("DOMContentLoaded", function() {
    const productContainer = document.querySelector(".update-product");

    if (productContainer) {
        fetch("/frontend/public/views/components/update_product.html")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error al cargar el componente");
                }
                return response.text();
            })
            .then(data => {
                productContainer.innerHTML = data;
            })
            .catch(error => console.log("Error cargando el formulario de actualizar producto:", error));
    }
});

function mostrarAlerta(event) {
  event.preventDefault(); // Evita que el formulario se envíe
  alert("¡Se deshabilito el producto exitosamente");
  window.location.href = "/frontend/public/views/p_card_public.html";
}