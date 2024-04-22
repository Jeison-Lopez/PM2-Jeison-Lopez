// Requiero el modulo de servicios el cual contiene las películas
const movieService = require("../services/movieService");
// Creo una función la cual sera el controlador
// ? Controlador de la petición
const getAllMovies = (req, res) => {
  // Declaro movies como el array de películas
  const movies = movieService.getMovies();
  // Declaro un status para entregar como respuesta (El estado 200 da como mensaje de respuesta "OK")
  // Agrego el metodo .send para enviar una respuesta
  res.status(200).json(movies);
};

// Exportamos el controlador para poder utilizarlo en la solicitud
module.exports = { getAllMovies };
