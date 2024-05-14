// Requiero el modulo de servicios el cual contiene las películas
const movieService = require("../services/movieService");
// Creo una función la cual sera el controlador
// ? Controlador de la petición
const getAllMovies = async (req, res) => {
  try {
    // Declaro movies como el array de películas
    const movies = await movieService.getMovies();
    // Declaro un status para entregar como respuesta (El estado 200 da como mensaje de respuesta "OK")
    // Agrego el metodo .json para enviar una respuesta en dicho formato
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({
      error: "Error interno del servidor",
    });
  }
};

module.exports = getAllMovies;
