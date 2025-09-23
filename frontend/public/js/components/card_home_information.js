document.addEventListener("DOMContentLoaded", function() {
    const card_adminElement = document.querySelector(".card_home");

    if (card_adminElement) {
        fetch("/frontend/public/views/components/card_admin_home.html")
            .then(response => response.text())
            .then(data => {
                card_adminElement.innerHTML = data;
            })
            .catch(error => console.log("Error cargando la card del inicio", error));
    }   
});