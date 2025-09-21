document.addEventListener("DOMContentLoaded", function () {
  const ToolbarElement = document.querySelector(".toolbar");

  if (ToolbarElement) {
    fetch("/frontend/public/views/components/toolbar.html")
      .then(response => response.text())
      .then(data => {
        ToolbarElement.innerHTML = data;
      })
      .catch(error => console.log("Error cargando el toolbar", error));
  }
});
