document.addEventListener("DOMContentLoaded", function () {
  const navbarElement = document.querySelector(".contact-home__container");

  if (navbarElement) {
    fetch("/frontend/public/views/components/navbar_contact.html")
      .then((response) => response.text())
      .then((data) => {
        navbarElement.innerHTML = data;

        // Menú principal
        const toggleBtn = navbarElement.querySelector(".navbar-home__toggle");
        const navList = navbarElement.querySelector(".navbar-home__list");
        toggleBtn?.addEventListener("click", () => {
          navList.classList.toggle("show");
        });

        // Menú de usuario
        const userToggle = navbarElement.querySelector(".user-menu__toggle");
        const userMenu = navbarElement.querySelector(".user-menu__list");

        userToggle?.addEventListener("click", () => {
          userMenu.classList.toggle("show");
        });

        // Opcional: Cerrar al hacer clic fuera
        document.addEventListener("click", (e) => {
          if (!navbarElement.contains(e.target)) {
            userMenu?.classList.remove("show");
            navList?.classList.remove("show");
          }
        });
      })
      .catch((error) => console.error("Error cargando el navbar", error));
  }
});