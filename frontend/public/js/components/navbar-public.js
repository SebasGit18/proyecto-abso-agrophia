document.addEventListener("DOMContentLoaded", function(){
    const navbarElement = document.querySelector(".container-navbar_public");

    if(navbarElement){
        fetch("/frontend/public/views/components/navbar-public.html")
        .then(response => response.text())
        .then(data => {
            navbarElement.innerHTML = data;
    })
    .catch(error => console.error("Error cargando el navbar", error));

    }
});