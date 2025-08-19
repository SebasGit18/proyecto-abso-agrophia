document.addEventListener("DOMContentLoaded", function() {
    const heroElement = document.querySelector(".hero-container");

    if (heroElement) {
        fetch("/frontend/public/views/components/hero.html")
            .then(response => response.text())
            .then(data => {
                heroElement.innerHTML = data;
            })
            .catch(error => console.log("Error cargando el hero", error));
    }   
});