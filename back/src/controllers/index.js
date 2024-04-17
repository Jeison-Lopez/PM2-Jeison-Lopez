// Creo una función la cual sera el controlador
// ? Controlador de la petición
const movieController = (req, res) => {
  // Declaro un status para entregar como respuesta (El estado 200 da como mensaje de respuesta "OK")
  // Agrego el metodo .send para enviar una respuesta
  res
    .status(200)
    .send("Próximamente estarán disponibles los datos de películas.");
};

// Exportamos el controlador para poder utilizarlo en la solicitud
module.exports = { movieController };
