const { crearTarjeta } = require("./card");
// Función para mostrar los datos del servidor
function mostrarTarjetas(data) {
  // Obtenemos el contenedor donde se mostrarán las tarjetas de películas
  const contenedor = document.getElementById("container");

  // Iteramos sobre cada elemento del servidor
  data.forEach((pelicula) => {
    // Creamos una tarjeta para la película actual
    const tarjeta = crearTarjeta(pelicula);
    // Agregamos la tarjeta al contenedor de películas en el HTML
    contenedor.appendChild(tarjeta);
  });
}

module.exports = mostrarTarjetas;
