document.addEventListener("DOMContentLoaded", function () {
<<<<<<< HEAD
    const cardContainer = document.querySelector(".card__container");
  
    if (cardContainer) {
      fetch("/frontend/public/views/components/cards.html")
        .then(response => response.text())
        .then(data => {
          cardContainer.innerHTML = data;
        })
        .catch(error => console.error("Error cargando la tarjeta:", error));
    }
  });
  
  //Espera a que cargue todo el DOM, busca el contenedor con clase .card-container, si existe, hace fetch 
  //al archivo cards.html para traer el contenido (el HTML de la tarjeta), inserta la tarjeta adentro 
  //de .card-container.
  
=======
  const cardContainer = document.querySelector(".card__container");

  if (cardContainer) {
    fetch("/frontend/public/views/components/cards.html")
      .then(response => response.text())
      .then(data => {
        cardContainer.innerHTML = data;
      })
      .catch(error => console.error("Error cargando la tarjeta:", error));
  }
});

//Espera a que cargue todo el DOM, busca el contenedor con clase .card-container, si existe, hace fetch 
//al archivo cards.html para traer el contenido (el HTML de la tarjeta), inserta la tarjeta adentro 
//de .card-container.

>>>>>>> f6167521db86fce808b277f81a52384d3d929012
