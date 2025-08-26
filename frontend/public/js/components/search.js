document.addEventListener("DOMContentLoaded", function () {
    const searchContainer = document.querySelector(".search__container");
  
    if (searchContainer) {
      fetch("/frontend/public/views/components/search.html")
        .then(response => response.text())
        .then(data => {
          searchContainer.innerHTML = data;
        })
        .catch(error => console.error("Error cargando el buscador:", error));
    }
  });
  