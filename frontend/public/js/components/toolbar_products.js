document.addEventListener("DOMContentLoaded", function () {
  const ToolbarproductsElement = document.querySelector(".toolbar-products-container");

  if (ToolbarproductsElement) {
    fetch("/frontend/public/views/components/toolbar_products.html")
      .then(response => response.text())
      .then(data => {
        ToolbarproductsElement.innerHTML = data;
      })
      .catch(error => console.log("Error cargando el toolbar de productos", error));
  }
});
