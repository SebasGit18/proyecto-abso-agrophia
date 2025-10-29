document.addEventListener("DOMContentLoaded", function () {
  const MyOrdersContainer = document.querySelector(".my-orders");

  if (MyOrdersContainer) {
    fetch("/frontend/public/views/components/my_orders.html")
      .then(response => response.text())
      .then(data => {
        MyOrdersContainer.innerHTML = data;
      })
      .catch(error => console.error("Error cargando la información del perfil:", error));
  }
});
