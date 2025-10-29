document.addEventListener("DOMContentLoaded", function() {
    const tableusersElement = document.querySelector(".table_store");

    if (tableusersElement) {
        fetch("/frontend/public/views/components/store_admin.html")
            .then(response => response.text())
            .then(data => {
                tableusersElement.innerHTML = data;
            })
            .catch(error => console.log("Error cargando la tabla de usuarios", error));
    }   
});


