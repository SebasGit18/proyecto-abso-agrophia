document.addEventListener("DOMContentLoaded", function() {
    const sidebar_adminElement = document.querySelector(".sidebar-container");

    if (sidebar_adminElement) {
        fetch("/frontend/public/views/components/sidebar.html")
            .then(response => response.text())
            .then(data => {
                sidebar_adminElement.innerHTML = data;
            })
            .catch(error => console.log("Error cargando el sidebar", error));
    }   
});


