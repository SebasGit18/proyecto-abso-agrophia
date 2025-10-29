 document.addEventListener("DOMContentLoaded", function(){
    const formsElement = document.querySelector(".input-group");

    if(formsElement){
        fetch("/frontend/public/views/components/form_unidad_medida.html")
        .then(response => response.text())
        .then(data => {
            formsElement.innerHTML = data;
            
    })
    .catch(error => console.error("Error cargando el forms", error));

    }
});

function mostrarAlerta(event) {
  event.preventDefault();
  alert("¡El producto Se agregó al carrito exitosamente!");
  window.location.href = "/frontend/public/views/p_login-customer.html";
}