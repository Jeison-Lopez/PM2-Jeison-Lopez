// Traigo con "Router" un enrutador(Objeto que nos proporciona la líbreria de express) el cual tendra dentro las rutas que yo defina
const { Router } = require("express");
// Creo una variable router la cual sera una instancia del enrutador
const router = Router();
// Traigo el enrutador de "movies"
const moviesRouter = require("./moviesRouter");
// Encamino el enrutador a su módulo
router.use("/movies", moviesRouter);

module.exports = router;
