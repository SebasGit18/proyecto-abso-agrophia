document.addEventListener("DOMContentLoaded", function(){
    const profileElemnent = document.querySelector(".profile-container-shop");

    if(profileElemnent){
        fetch("/frontend/public/views/components/profile_shop.html")
        .then(response => response.text())
        .then(data => {
            profileElemnent.innerHTML = data;
        })

    .catch(error => console.log("Error cargando el perfil", error));
    }
});

function mostrarAlerta(event) {
  event.preventDefault(); // Evita que el formulario se envíe
  alert("¡Tienda deshabilitada exitosamente!");
  window.location.href = "/frontend/public/views/p_login-customer.html";
}