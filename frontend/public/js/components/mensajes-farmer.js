document.addEventListener("DOMContentLoaded", function(){
    const MensajesElemnent = document.querySelector(".mensajes-farmer");

    if(MensajesElemnent){
        fetch("/frontend/public/views/components/mensajes_farmer.html")
        .then(response => response.text())
        .then(data => {
            MensajesElemnent.innerHTML = data;
        })

    .catch(error => console.log("Error cargando el toolbar", error));
    }
});

function mostrarAlerta(event) {
  event.preventDefault(); // Evita que el formulario se envíe
  alert("¡Respuesta enviado correctamente!");
  window.location.href = "/frontend/public/views/interface_farmer.html";
}