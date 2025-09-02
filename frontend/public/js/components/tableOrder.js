document.addEventListener("DOMContentLoaded", function(){
    const tableorderElemnent = document.querySelector(".tableorder-container");

    if(tableorderElemnent){
        fetch("/frontend/public/views/components/tableOrder.html")
        .then(response => response.text())
        .then(data => {
            tableorderElemnent.innerHTML = data;
        })

    .catch(error => console.log("Error cargando la tabla de pedidos", error));
    }
});