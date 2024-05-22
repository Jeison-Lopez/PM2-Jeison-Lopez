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

// Acceder el botón de limpiar y el formulario
const clear = document.getElementById("clear");
const form = document.getElementById("form");
// Función que maneja el evento de limpieza
const cb = () => {
  // Selecciono todos los inputs dentro del formulario
  const inputs = document.querySelectorAll("input");
  // Itero sobre cada input para limpiar si contenido
  inputs.forEach((input) => {
    input.value = "";
  });
};

// Agregar even listener para el boton
clear.addEventListener("click", cb);

//TODO : Implementar una función que maneje el evento de envío de formulario, que por el momento se encargará de seleccionar los inputs, y validar que todos los datos estén completos.

// Función que maneja el evento de envío
const cbSend = async (event) => {
  // Evito que el formulario se envíe
  event.preventDefault();
  // Selecciono todos los inputs dentro del formulario
  const inputs = document.querySelectorAll("input");
  // Recopilo los datos del formulario
  const formData = {
    title: document.getElementById("title").value,
    year: document.getElementById("year").value,
    director: document.getElementById("director").value,
    duration: document.getElementById("duration").value,
    genre: document.getElementById("genre").value,
    rate: document.getElementById("rate").value,
    poster: document.getElementById("poster").value,
  };
  // Itero sobre cada input y verifico si está vacío
  // Utilizo const para que la varible de control input tenga un ámbito de bloque y éste limitada al contexto del bucle, evitando así problemas de ámbito y posibles efectos no deseados en otras partes del código.
  for (const input of inputs) {
    // En cada iteración, se verifica si el valor del input está vacío utilizando !input.value.trim(). input.value obtiene el valor del input actual y trim() elimina los espacios en blanco del principio y del final. Si el valor del input está vacío después de quitar los espacios en blanco, !input.value.trim() será true, lo que significa que el input está vacío.
    if (!input.value.trim()) {
      alert("Por favor, completa todos los campos.");
      return;
    }
  }
  // Enviar los datos del formulario al backend utilizando Axios
  try {
    const response = await axios.post("http://localhost:3000/movies", formData);
    console.log("Película creada:", response.data);
    alert("Película creada exitosamente");
  } catch (error) {
    console.error("Error al crear la película:", error);
    alert("Error al crear la película");
  }
};

// Event listener para el envío de datos
form.addEventListener("submit", cbSend);
