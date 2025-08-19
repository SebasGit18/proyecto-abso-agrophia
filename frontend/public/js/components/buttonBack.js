document.addEventListener("DOMContentLoaded", function(){
    const buttonBackElemnent = document.querySelector(".button-container");

    if(buttonBackElemnent){
        fetch("/frontend/public/views/components/buttonBack.html")
        .then(response => response.text())
        .then(data => {
            buttonBackElemnent.innerHTML = data;
        })

    .catch(error => console.log("Error cargando el botón de volver", error));
    }
});