document.addEventListener("DOMContentLoaded", function() {
    const profileContainer = document.querySelector(".profile-form-update-container");

    if (profileContainer) {
        fetch("/frontend/public/views/components/update_perfil.html")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error al cargar el componente");
                }
                return response.text();
            })
            .then(data => {
                profileContainer.innerHTML = data;
            })
            .catch(error => console.log("Error cargando el componente de perfil:", error));
    }
});
