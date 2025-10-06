document.addEventListener("DOMContentLoaded", function(){
    const commentElemnent = document.querySelector(".questionbar-container");

    if(commentElemnent){
        fetch("/frontend/public/views/components/comment_bar.html")
        .then(response => response.text())
        .then(data => {
            commentElemnent.innerHTML = data;
        })

    .catch(error => console.log("Error cargando el comentario", error));
    }
});