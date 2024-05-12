// Traigo con "Router" un enrutador(Objeto que nos proporciona la líbreria de express) el cual tendra dentro las rutas que yo defina
const { Router } = require("express");
// Creo una variable router la cual sera una instancia del enrutador
const router = Router();
// Requerimos el controlador
const getAllMovies = require("../controllers/movieController");
// Defino el típo de solicitud que espero, en este caso una solicitud de tipo GET
// La estructura es: El enrutador, el tipo de solicitud, la dirección, el controlador(Una función)
// ? Experando una petición de tipo GET a /movies
router.get("/movies", getAllMovies);

module.exports = router;
