// Proyecto Full Stack
// Función para crear una tarjeta de película
function crearTarjeta(pelicula) {
  // Creamos un nuevo elemento div que representará la tarjeta de la película
  const tarjeta = document.createElement("div");
  // Agregamos la clase 'tarjeta' al elemento div para aplicar estilos
  tarjeta.classList.add("tarjeta");

  // Creamos un elemento h2 para mostrar el título de la película
  const titulo = document.createElement("h2");
  // Asignamos el texto del título de la película al elemento h2
  titulo.textContent = pelicula.title;

  // Creamos un párrafo para mostrar el nombre del director de la película
  const director = document.createElement("p");
  // Asignamos el texto del nombre del director al párrafo
  director.textContent = "Director: " + pelicula.director;

  // Creamos un párrafo para mostrar el año de lanzamiento de la película
  const año = document.createElement("p");
  // Asignamos el texto del año de lanzamiento al párrafo
  año.textContent = "Año: " + pelicula.year;

  // Creamos un párrafo para mostrar la duración de la película
  const duracion = document.createElement("p");
  // Asignamos el texto de la duración al párrafo
  duracion.textContent = "Duración: " + pelicula.duration;

  // Creamos un párrafo para mostrar los géneros de la película
  const genero = document.createElement("p");
  // Convertimos el array de géneros en una cadena separada por comas y asignamos el texto al párrafo
  genero.textContent = "Género: " + pelicula.genre.join(", ");

  // Creamos un párrafo para mostrar la calificación de la película
  const rate = document.createElement("p");
  // Asignamos el texto de la calificación al párrafo
  rate.textContent = "Rate: " + pelicula.rate;

  // Creamos un elemento de imagen para mostrar el póster de la película
  const imagen = document.createElement("img");
  // Asignamos la fuente de la imagen al URL del póster de la película
  imagen.src = pelicula.poster;
  // Asignamos el texto alternativo de la imagen al título de la película
  imagen.alt = pelicula.title;

  // Agregamos los elementos creados (imagen, título, director, etc.) a la tarjeta de la película
  tarjeta.appendChild(imagen);
  tarjeta.appendChild(titulo);
  tarjeta.appendChild(director);
  tarjeta.appendChild(año);
  tarjeta.appendChild(duracion);
  tarjeta.appendChild(genero);
  tarjeta.appendChild(rate);

  // Devolvemos la tarjeta completa con toda la información de la película
  return tarjeta;
}

module.exports = { crearTarjeta };
