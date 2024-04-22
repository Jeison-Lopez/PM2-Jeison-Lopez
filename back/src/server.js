// Requerir express el cual ya tenemos como dependencia
const express = require("express");
// Requerir morgan
const morgan = require("morgan");
// Requerir cors
const cors = require("cors");
// Inicializamos express dentro de app
const app = express();
// Middleware para registrar las solicitudes HTTP
app.use(morgan("dev"));
// Middleware para permitir solicitudes desde cualquier origen
app.use(cors());
// Middleware para analizar el cuerpo de las solicitudes en formato JSON
app.use(express.json());
// Requerimos el enrutado
const router = require("../src/routes");
// Hacemos que app pueda conocer y utilizar el enrutador con el metodo USE
app.use(router);
// Ponemos a disposición app
module.exports = app;
