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
                // Insertamos el componente en el contenedor
                profileContainer.innerHTML = data;

                // Obtenemos los elementos del componente
                const saveButton = profileContainer.querySelector("#btn-save");
                const successMessage = profileContainer.querySelector("#success-message");

                // Verificamos que existan antes de usarlos
                if (saveButton && successMessage) {
                    saveButton.addEventListener("click", () => {
                        // Mostrar mensaje de éxito
                        successMessage.classList.add("profile-update__message--show");

                        // Esperar 2 segundos y redirigir
                        setTimeout(() => {
                            successMessage.classList.remove("profile-update__message--show");
                            window.location.href = "/frontend/public/views/profile.html";
                        }, 2000);
                    });
                }
            })
            .catch(error => console.log("Error cargando el componente de perfil 2:", error));
    }
});
