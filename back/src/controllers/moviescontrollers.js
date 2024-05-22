// Requiero el modulo de servicios el cual contiene las películas
const { getMovies, createMovies } = require("../services/movieService");
// Creo una función la cual sera el controlador
// ? Controlador de la petición
const getAllMovies = async (req, res) => {
  try {
    // Declaro movies como el array de películas
    const movies = await getMovies();
    // Declaro un status para entregar como respuesta (El estado 200 da como mensaje de respuesta "OK")
    // Agrego el metodo .json para enviar una respuesta en dicho formato
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({
      error: "Error interno del servidor",
    });
  }
};

//TODO: Implementar una función en el controlador de películas que se encargue de desestructurar del body los datos de la película para así llamar a la función del servicio que implementamos en el paso anterior. Que maneje errores de manera tal que si todo salió correctamente, se envíe un mensaje descriptivo al cliente con el status 201.

// Funcion que maneja la creación de películas

const addMovie = async (req, res) => {
  try {
    // Desestructura los datos de la película del cuerpo de la solicitud (req.body)
    const { title, year, director, duration, genre, rate, poster } = req.body;
    // Llamamos a la función createMovie del servicio para crear una nueva película
    const newMovie = await createMovies({
      title,
      year,
      director,
      duration,
      genre,
      rate,
      poster,
    });
    // Envía una respuesta con el estado 201 y un mensaje
    res
      .status(201)
      .json({ message: "Película creada exitosamente", movie: newMovie });
  } catch (error) {
    // Manejo el error y envío una respuesta con el estado 500 y un mensaje
    res
      .status(500)
      .json({ message: "Error al crear la película", error: error.message });
  }
};

module.exports = { getAllMovies, addMovie };
