document.addEventListener("DOMContentLoaded", function() {
    const DetailElement = document.querySelector(".shop-detail-card");

    if (DetailElement) {
        fetch("/frontend/public/views/components/shop-detail-admin.html")
            .then(response => response.text())
            .then(data => {
                DetailElement.innerHTML = data;
            })
            .catch(error => console.log("Error cargando la información", error));
    }   
});
function mostrarAlerta(event) {
  event.preventDefault(); // Evita que el formulario se envíe
  alert("¡Tienda deshabilitada exitosamente!");
  window.location.href = "/frontend/public/views/store_admin.html";
}