document.addEventListener("DOMContentLoaded", function(){
    const tableHomeElemnent = document.querySelector(".toolbar-home");

    if(tableHomeElemnent){
        fetch("/frontend/public/views/components/toolbar_home.html")
        .then(response => response.text())
        .then(data => {
            tableHomeElemnent.innerHTML = data;
        })

    .catch(error => console.log("Error cargando el toolbar", error));
    }
});