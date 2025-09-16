document.addEventListener("DOMContentLoaded", function(){
    const profileElemnent = document.querySelector(".profile-container");

    if(profileElemnent){
        fetch("/frontend/public/views/components/profile.html")
        .then(response => response.text())
        .then(data => {
            profileElemnent.innerHTML = data;
        })

    .catch(error => console.log("Error cargando el perfil", error));
    }
});