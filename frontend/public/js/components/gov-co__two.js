document.addEventListener("DOMContentLoaded", function () {
  const govcoElement = document.querySelector(".govco-container__two");

  if (govcoElement) {
    fetch("/frontend/public/views/components/gov-co__two.html")
      .then(response => response.text())
      .then(data => {
        govcoElement.innerHTML = data;
      })
      .catch(error => console.log("Error cargando el gov.co 2", error));
  }
});
