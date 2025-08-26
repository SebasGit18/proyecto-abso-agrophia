document.addEventListener("DOMContentLoaded", () => {
    // 👉 Cargar Sidebar
    fetch("/frontend/public/views/components/sidebar.html")
        .then(response => response.text())
        .then(html => {
            document.querySelector(".sidebar-container").innerHTML = html;
        })
        .catch(error => console.error("Error cargando sidebar:", error));

    // 👉 Cargar Tabla de Usuarios
    fetch("/frontend/public/views/components/tabla_usuarios_admin.html")
        .then(response => response.text())
        .then(html => {
            document.querySelector(".main-content").innerHTML = html;
        })
        .catch(error => console.error("Error cargando tabla de usuarios:", error));
});
