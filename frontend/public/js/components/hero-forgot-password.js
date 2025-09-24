document.addEventListener("DOMContentLoaded", function(){
    const heroElement = document.querySelector(".forgot-password__hero-container");

    if(heroElement){
        fetch("/frontend/public/views/components/hero-forgot-password.html")
        .then(response => response.text())
        .then(data =>{
            heroElement.innerHTML = data;
        })

    .catch(error => console.log("Error cargando el hero", error));
    }
});