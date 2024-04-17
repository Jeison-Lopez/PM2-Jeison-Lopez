// Requerir express el cual ya tenemos como dependencia
const express = require("express");
// Inicializamos express dentro de app
const app = express();
// Requerimos el enrutado
const router = require("../src/routes");
// Hacemos que app pueda conocer y utilizar el enrutador con el metodo USE
app.use(router);
// Ponemos a disposición app
module.exports = app;
