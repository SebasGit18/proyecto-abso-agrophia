 document.addEventListener("DOMContentLoaded", function(){
    const header_amount_productElement = document.querySelector(".header-container");

    if(header_amount_productElement){
        fetch("/frontend/public/views/components/header_amount_product.html")
        .then(response => response.text())
        .then(data => {
            header_amount_productElement.innerHTML = data;
            
    })
    .catch(error => console.error("Error cargando el header", error));

    }
});