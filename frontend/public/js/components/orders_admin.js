document.addEventListener("DOMContentLoaded", function() {
    const PedidosElement = document.querySelector(".table-orders");

    if (PedidosElement) {
        fetch("/frontend/public/views/components/pedidos_table.html")
            .then(response => response.text())
            .then(data => {
                PedidosElement.innerHTML = data;
            })
            .catch(error => console.log("Error cargando la tabla de pedidos", error));
    }   
});