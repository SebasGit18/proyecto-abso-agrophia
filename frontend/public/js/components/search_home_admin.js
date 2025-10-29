document.addEventListener("DOMContentLoaded", function () {
  const headertable = document.querySelector(".search-home");

  if (headertable) {
    fetch("/frontend/public/views/components/search_home.html")
      .then(response => response.text())
      .then(data => {
        headertable.innerHTML = data;
      })
      .catch(error => console.error("Error cargando la barra de busqueda:", error));
  }
});
