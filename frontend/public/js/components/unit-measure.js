document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".unit-measure__container");
  
    if (container) {
      fetch("/frontend/public/views/components/unit-measure.html")
        .then(response => response.text())
        .then(data => {
          container.innerHTML = data;
        })
        .catch(error => console.error("Error cargando el componente:", error));
    }
  });
  