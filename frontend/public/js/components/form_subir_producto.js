 document.addEventListener("DOMContentLoaded", function(){
    const formsElement = document.querySelector(".producto-form__body");

    if(formsElement){
        fetch("/frontend/public/views/components/form_subir_producto.html")
        .then(response => response.text())
        .then(data => {
            formsElement.innerHTML = data;
            
    })
    .catch(error => console.error("Error cargando el forms", error));

    }
});