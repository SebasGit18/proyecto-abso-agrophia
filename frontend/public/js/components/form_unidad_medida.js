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