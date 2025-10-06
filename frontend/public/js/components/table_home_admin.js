document.addEventListener("DOMContentLoaded", function(){
    const tablehomeElemnent = document.querySelector(".table-home-container");

    if(tablehomeElemnent){
        fetch("/frontend/public/views/components/table_home.html")
        .then(response => response.text())
        .then(data => {
            tablehomeElemnent.innerHTML = data;
        })

    .catch(error => console.log("Error cargando la tabla de inicio", error));
    }
});