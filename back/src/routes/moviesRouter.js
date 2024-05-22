// Traigo con "Router" un enrutador(Objeto que nos proporciona la líbreria de express) el cual tendra dentro las rutas que yo defina
const { Router } = require("express");
// Requerimos el controlador
const { getAllMovies, addMovie } = require("../controllers/moviescontrollers");
// Creo una variable router la cual sera una instancia del enrutador
const moviesRouter = Router();
// Encamino el metódo "get" hacía el controlador
moviesRouter.get("/", getAllMovies);
//TODO: Preparar en nuestro enrutador un nuevo endpoint que se encargue de recibir una petición de método POST a “/movies”. Al recibirla, ejecutar la lógica definida por el controlador implementado en el punto anterior.
moviesRouter.post("/", addMovie);

module.exports = moviesRouter;
