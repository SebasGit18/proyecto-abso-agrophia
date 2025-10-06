document.addEventListener("DOMContentLoaded", function() {
    const tableproductsElement = document.querySelector(".table-products");

    if (tableproductsElement) {
        fetch("/frontend/public/views/components/table_products_admin.html")
            .then(response => response.text())
            .then(data => {
                tableproductsElement.innerHTML = data;
            })
            .catch(error => console.log("Error cargando la tabla de productos", error));
    }   
});


