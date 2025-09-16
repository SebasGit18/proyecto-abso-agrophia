 document.addEventListener("DOMContentLoaded", function(){
    const formElement = document.querySelector(".contact-form-container");

    if(formElement){
        fetch("/frontend/public/views/components/form_contact.html")
        .then(response => response.text())
        .then(data => {
            formElement.innerHTML = data;
            
    })
    .catch(error => console.error("Error cargando el formulario de contacto", error));

    }
});