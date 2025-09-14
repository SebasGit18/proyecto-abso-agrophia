document.addEventListener("DOMContentLoaded", function() {
    const tableusersElement = document.querySelector(".table_users");

    if (tableusersElement) {
        fetch("/frontend/public/views/components/tabla_usuarios_admin.html")
            .then(response => response.text())
            .then(data => {
                tableusersElement.innerHTML = data;
            })
            .catch(error => console.log("Error cargando la tabla de usuarios", error));
    }   
});


