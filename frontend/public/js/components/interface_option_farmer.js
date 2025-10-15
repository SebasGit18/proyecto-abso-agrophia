document.addEventListener("DOMContentLoaded", function(){
    const cardoptionsfarmerElement = document.querySelector(".board-container");

    if(cardoptionsfarmerElement){
        fetch("/frontend/public/views/components/interface_option_farmer.html")
        .then(response => response.text())
        .then(data => {
            cardoptionsfarmerElement.innerHTML = data;
        })

    .catch(error => console.log("Error cargando las opciones del farmer.", error));
    }
});