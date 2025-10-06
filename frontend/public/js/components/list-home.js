document.addEventListener("DOMContentLoaded", function(){
    const navbarElement = document.querySelector(".list-home__container");

    if(navbarElement){
        fetch("/frontend/public/views/components/list-home.html")
        .then(response => response.text())
        .then(data => {
            navbarElement.innerHTML = data;
    })
    .catch(error => console.error("Error cargando la lista", error));

    }
});