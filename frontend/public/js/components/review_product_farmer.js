document.addEventListener("DOMContentLoaded", function(){
    const ReviewElemnent = document.querySelector(".review-product");

    if(ReviewElemnent){
        fetch("/frontend/public/views/components/review_product_farmer.html")
        .then(response => response.text())
        .then(data => {
            ReviewElemnent.innerHTML = data;
        })

    .catch(error => console.log("Error cargando la vista", error));
    }
});