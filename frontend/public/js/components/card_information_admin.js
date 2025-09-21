document.addEventListener("DOMContentLoaded", function() {
    const card_adminElement = document.querySelector(".card_admin_information");

    if (card_adminElement) {
        fetch("/frontend/public/views/components/card_information_admin.html")
            .then(response => response.text())
            .then(data => {
                card_adminElement.innerHTML = data;
            })
            .catch(error => console.log("Error cargando la card", error));
    }   
});