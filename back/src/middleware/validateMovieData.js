const validateMovieData = (req, res, next) => {
  const { title, year, director, duration, genre, rate, poster } = req.body;

  if (!title || !year || !director || !duration || !genre || !rate || !poster) {
    return res
      .status(400)
      .json({ error: "Todos los campos son obligatorios." });
  }

  if (!/^\d{4}$/.test(year)) {
    return res
      .status(400)
      .json({ error: "El año debe ser un número de 4 dígitos." });
  }

  next();
};

module.exports = validateMovieData;
