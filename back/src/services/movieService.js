const Movie = require("../models/Movie");

const getMovies = async () => {
  const movies = await Movie.find();
  return movies;
};

//TODO : Implementar en el módulo de servicio de películas una función async que reciba por parámetro los datos de las películas y llame al método correspondiente del modelo Movie para crear una nueva película en la base de datos.

// Función async para crear una nueva película
const createMovies = async (data) => {
  // Utilizar el metodo create() para el modelo "Movie"
  const movie = await Movie.create(data);
  return movie;
};

module.exports = { getMovies, createMovies };
// // Extra credit: Clase que responde con instancias
// class Movie {
//   constructor({ title, year, director, duration, genre, rate, poster }) {
//     if (
//       !title ||
//       !year ||
//       !director ||
//       !duration ||
//       !genre ||
//       !rate ||
//       !poster
//     ) {
//       // throw new Error() se utiliza para lanzar un erro personalizado
//       throw new Error("Datos requeridos de manera correcta");
//     }
//     this.title = title;
//     this.year = year;
//     this.director = director;
//     this.duration = duration;
//     this.genre = genre;
//     this.rate = rate;
//     this.poster = poster;
//   }
// }
// // Función que retorna el arreglo de películas
// const getMovies = async () => {
//   const moviesData = [
//     {
//       title: "Guardians of the Galaxy Vol. 2",
//       year: 2017,
//       director: "James Gunn",
//       duration: "2h 16min",
//       genre: ["Action", "Adventure", "Comedy"],
//       rate: 7.7,
//       poster:
//         "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
//     },
//     {
//       title: "Star Wars: Episode IV - A New Hope",
//       year: 1977,
//       director: "George Lucas",
//       duration: "2h 1min",
//       genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
//       rate: 8.7,
//       poster:
//         "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
//     },
//     {
//       title: "The Lord of the Rings: The Fellowship of the Ring",
//       year: 2001,
//       director: "Peter Jackson",
//       duration: "2h 58min",
//       genre: ["Action", "Adventure", "Drama", "Fantasy"],
//       rate: 8.8,
//       poster:
//         "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
//     },
//   ];
//   const movies = moviesData.map((movie) => new Movie(movie));
//   return movies;
// };

// // Exportamos la función y la clase

// module.exports = {
//   Movie,
//   getMovies,
// };
