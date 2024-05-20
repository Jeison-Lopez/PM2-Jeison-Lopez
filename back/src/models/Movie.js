// Requerir mongoose
const mongoose = require("mongoose");
// Crear el Schema
const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  director: String,
  duration: String,
  genre: Array,
  rate: Number,
  poster: String,
});
// Crear el modelo
const Movie = mongoose.model("Movie", movieSchema);
// Exportar el modelo
module.exports = Movie;
