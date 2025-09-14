document.addEventListener("DOMContentLoaded", function () {
  const ToolbarPedidosElement = document.querySelector(".toolbar_orders");

  if (ToolbarPedidosElement) {
    fetch("/frontend/public/views/components/toolbar_orders.html")
      .then(response => response.text())
      .then(data => {
        ToolbarPedidosElement.innerHTML = data;
      })
      .catch(error => console.log("Error cargando el toolbar de pedidos", error));
  }
});
