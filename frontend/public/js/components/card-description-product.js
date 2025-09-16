document.addEventListener("DOMContentLoaded", function(){
    const cardDescriptionProductElement = document.querySelector(".card__description-container");

    if(cardDescriptionProductElement){
        fetch("/frontend/public/views/components/card-description-product.html")
        .then(response => response.text())
        .then(data => {
            cardDescriptionProductElement.innerHTML = data;
        })

    .catch(error => console.log("Error cargando la descripción del producto.", error));
    }
});