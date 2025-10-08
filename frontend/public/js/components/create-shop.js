document.addEventListener("DOMContentLoaded", function(){
    const createShopElement = document.querySelector(".page__formshop-container");

    if(createShopElement){
        fetch("/frontend/public/views/components/create-shop.html")
        .then(response => response.text())
        .then(data => {
            createShopElement.innerHTML = data;
        })

    .catch(error => console.log("Error cargando el formulario de crear tienda", error));
    }
});