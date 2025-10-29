document.addEventListener("DOMContentLoaded", function () {
  const ToolbarElement = document.querySelector(".toolbar_shop");

  if (ToolbarElement) {
    fetch("/frontend/public/views/components/toolbar_Shop.html")
      .then(response => response.text())
      .then(data => {
        ToolbarElement.innerHTML = data;
      })
      .catch(error => console.log("Error cargando el toolbar", error));
  }
});
