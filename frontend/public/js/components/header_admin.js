document.addEventListener("DOMContentLoaded", function () {
  const HeaderAdminElement = document.querySelector(".header-adminis");

  if (HeaderAdminElement) {
    fetch("/frontend/public/views/components/header_admin.html")
      .then(response => response.text())
      .then(data => {
        HeaderAdminElement.innerHTML = data;
      })
      .catch(error => console.log("Error cargando el header del admin", error));
  }
});
