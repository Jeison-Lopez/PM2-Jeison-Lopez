// Traigo con "Router" un enrutador(Objeto que nos proporciona la líbreria de express) el cual tendra dentro las rutas que yo defina
const { Router } = require("express");
// Requerimos el controlador
const getAllMovies = require("../controllers/moviescontrollers");
// Creo una variable router la cual sera una instancia del enrutador
const moviesRouter = Router();
// Encamino el metódo "get" hacía el controlador
moviesRouter.get("/", getAllMovies);

module.exports = moviesRouter;
