document.addEventListener("DOMContentLoaded", function(){
    const shoppingcarElemnent = document.querySelector(".shoppingcar-container");

    if(shoppingcarElemnent){
        fetch("/frontend/public/views/components/shopping_car.html")
        .then(response => response.text())
        .then(data => {
            shoppingcarElemnent.innerHTML = data;
        })

    .catch(error => console.log("Error cargando al cargar el carrito de compras", error));
    }
});

function mostrarAlerta(event) {
  event.preventDefault(); // Evita que el formulario se envíe
  alert("¡Compra exitosamente!");
  window.location.href = "/frontend/public/views/p_login-customer.html";
}