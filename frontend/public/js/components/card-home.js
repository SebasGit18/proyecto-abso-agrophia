//Exportamos una función llamada loadcards que acepta:
//-containerSelector: un selector CSS para el contenedor donde van las card 
//-carIds: un array es opcional con los id de las cards que se quieren mostrar.
export async function loadCards(containerSelector, cardIds = []) {

  //Obtenemos el contenedor del DOM
  const container = document.querySelector(containerSelector);

  if (!container) return; //Si no existe simplemente nos salimos

  try {
    const [templateRes, dataRes] = await Promise.all([
      //Hacer 2 fetch al mismo tiempo
      fetch("/frontend/public/views/components/card-home.html"), // plantilla
      fetch("/frontend/public/data/card-home.json"), // datos
    ]);

    //Convertir las respuestas
    const template = await templateRes.text();
    const cards = await dataRes.json();

    //Filtrar cards si se pasan IDs específicos
    const filteredCards = cardIds.length
      ? cards.filter(card => cardIds.includes(card.id))
      : cards;

    filteredCards.forEach(card => {
      //Reemplazar placeholders con datos reales
      let html = template
        .replace("{{image}}", card.image)
        .replace("{{price}}", card.price)
        .replace("{{name}}", card.name)
        .replace("{{button1}}", card.button1)
        .replace("{{button2}}", card.button2);

      //Insertar la card en el contenedor
      container.insertAdjacentHTML("beforeend", html);
    });

    // Después de insertar todas las cards, agregar listeners a los botones
    container.querySelectorAll(".btn-agregar-carrito").forEach(button => {
      button.addEventListener("click", mostrarAlerta);
    });
  } 
  catch (error) {
    console.error("Error cargando las cards", error);
  }
}

// Función de alerta
// function mostrarAlerta(event) {
//   event.preventDefault();
//   alert("¡El producto Se agregó al carrito exitosamente!");
//   window.location.href = "/frontend/public/views/p_login-customer.html";
// }
