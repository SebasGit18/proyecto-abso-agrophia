 document.addEventListener("DOMContentLoaded", function(){
    const formsElement = document.querySelector(".producto-form__body2");

    if(formsElement){
        fetch("/frontend/public/views/components/form_subir_producto2.html")
        .then(response => response.text())
        .then(data => {
            formsElement.innerHTML = data;
            
    })
    .catch(error => console.error("Error cargando el forms", error));

    }
});