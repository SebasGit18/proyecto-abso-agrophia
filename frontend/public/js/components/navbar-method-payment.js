document.addEventListener("DOMContentLoaded", function(){
    const navbarElement = document.querySelector(".header-method__container");

    if(navbarElement){
        fetch("/frontend/public/views/components/navbar-method-payment.html")
        .then(response => response.text())
        .then(data => {
            navbarElement.innerHTML = data;
    })
    .catch(error => console.error("Error cargando el navbar", error));

    }
});