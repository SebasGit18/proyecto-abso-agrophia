 document.addEventListener("DOMContentLoaded", function(){
    const footerElement = document.querySelector(".create-farmer2");

    if(footerElement){
        fetch("/frontend/public/views/components/create-perfil-farmer2.html")
        .then(response => response.text())
        .then(data => {
            footerElement.innerHTML = data;
            
    })
    .catch(error => console.error("Error cargando el formulario de registro", error));

    }
});