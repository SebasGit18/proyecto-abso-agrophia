document.addEventListener("DOMContentLoaded", function () {
    const cardContainer = document.querySelector(".card-disable__container");
  
    if (cardContainer) {
      fetch("/frontend/public/views/components/card-disable.html")
        .then(response => response.text())
        .then(data => {
          cardContainer.innerHTML = data;
        })
        .catch(error => console.error("Error cargando la tarjeta:", error));
    }
  });