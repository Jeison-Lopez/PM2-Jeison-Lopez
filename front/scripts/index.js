const mostrarTarjetas = require("./showCards");
const axios = require("axios");

// Función para obtener los datos del servidor y mostrar las tarjetas de películas
async function obtenerDatosYMostrarTarjetas() {
  try {
    // Realizamos una solicitud GET a la URL del servidor usando axios
    const response = await axios.get(
      "https://students-api.up.railway.app/movies"
    );
    // Llamamos a la función para mostrar las tarjetas de películas con los datos recibidos del servidor
    mostrarTarjetas(response.data);
  } catch (error) {
    console.error(
      "Error al obtener y mostrar las tarjetas de películas:",
      error
    );
  }
}

// Llamada a la función para obtener los datos del servidor y mostrar las tarjetas de películas al cargar la página
obtenerDatosYMostrarTarjetas();

// Todo: Pestaña
// Obtengo el título actual del documento y lo asigno a la variable docTitle
let docTitle = document.title;
// Agrego un evento que se dispara cuando la ventana pierde el foco
window.addEventListener("blur", () => {
  // Cambio el título del documento cuando la ventana pierde el foco
  document.title = "Vuelve 😔";
});
// Agrego un evento que se dispara cuando la ventana obtiene el foco
window.addEventListener("focus", () => {
  // Restauro el título del documento al título original almacenado en la variable docTitle cuando la ventana obtiene el foco
  document.title = docTitle;
});
