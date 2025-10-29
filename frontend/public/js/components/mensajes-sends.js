document.addEventListener("DOMContentLoaded", function(){
    const MensajesElemnent = document.querySelector(".mensajes-sends");

    if(MensajesElemnent){
        fetch("/frontend/public/views/components/mensajes_sends.html")
        .then(response => response.text())
        .then(data => {
            MensajesElemnent.innerHTML = data;
        })

    .catch(error => console.log("Error cargando los mensajes", error));
    }
});