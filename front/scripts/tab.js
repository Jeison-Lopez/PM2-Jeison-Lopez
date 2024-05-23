// Almacena el título actual del documento
let docTitle = document.title;

// Cambia el título del documento cuando la ventana pierde el foco
window.addEventListener("blur", () => {
  document.title = "Por favor, vuelve 😔"; // Mensaje emotivo para el usuario
});

// Restaura el título del documento cuando la ventana obtiene el foco
window.addEventListener("focus", () => {
  document.title = docTitle; // Restaura el título original del documento
});
