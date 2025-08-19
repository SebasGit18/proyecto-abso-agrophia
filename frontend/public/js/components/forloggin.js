document.addEventListener("DOMContentLoaded", function() {
    const logginElement = document.querySelector(".login-container");

    if (logginElement) {
        fetch("/frontend/public/views/components/forloggin.html")
            .then(response => response.text())
            .then(data => {
                logginElement.innerHTML = data;
            })
    .catch(error => console.log("Error cargando el login", error));
    }   
});
