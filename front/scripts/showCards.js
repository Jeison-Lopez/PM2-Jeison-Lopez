// Importamos la función 'crearTarjeta' desde el módulo 'card'
const { crearTarjeta } = require("./card");

function mostrarTarjetas(data) {
  // Obtenemos el contenedor donde se mostrarán las tarjetas de películas
  const contenedor = document.getElementById("container");

  // Iteramos sobre cada película en los datos obtenidos
  data.forEach((pelicula) => {
    // Creamos una nueva tarjeta para la película actual
    const tarjeta = crearTarjeta(pelicula);
    // Agregamos la tarjeta al contenedor de películas en el HTML
    contenedor.appendChild(tarjeta);
  });
}

// Exportamos la función 'mostrarTarjetas' para su uso en otros módulos
module.exports = mostrarTarjetas;
