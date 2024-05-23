// Importación de módulos
const mostrarTarjetas = require("./showCards");
const axios = require("axios");

// Definición de la URL del servidor como constante
const API_URL = "http://localhost:3000/movies";

// Función para obtener datos del servidor y mostrar tarjetas de películas
async function obtenerDatosYMostrarTarjetas() {
  try {
    const response = await axios.get(API_URL); // Realiza una solicitud GET al servidor
    mostrarTarjetas(response.data); // Muestra las tarjetas de películas
  } catch (error) {
    console.error(
      "Ocurrió un error al obtener y mostrar las tarjetas de películas:",
      error
    );
  }
}

// Llamada a la función para obtener datos y mostrar tarjetas al cargar la página
obtenerDatosYMostrarTarjetas();
