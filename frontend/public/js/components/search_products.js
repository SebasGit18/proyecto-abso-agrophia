document.addEventListener("DOMContentLoaded", function () {
  const headerproductstable = document.querySelector(".search-products");

  if (headerproductstable) {
    fetch("/frontend/public/views/components/search_products.html")
      .then(response => response.text())
      .then(data => {
        headerproductstable.innerHTML = data;
      })
      .catch(error => console.error("Error cargando la barra de busqueda:", error));
  }
});
