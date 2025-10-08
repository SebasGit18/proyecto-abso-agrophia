document.addEventListener("DOMContentLoaded", function() {
    const profileContainer = document.querySelector(".profile-form-update-container2");

    if (profileContainer) {
        fetch("/frontend/public/views/components/update-perfil2.html")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error al cargar el componente");
                }
                return response.text();
            })
            .then(data => {
                profileContainer.innerHTML = data;
            })
            .catch(error => console.log("Error cargando el componente de perfil 2:", error));
    }
});
