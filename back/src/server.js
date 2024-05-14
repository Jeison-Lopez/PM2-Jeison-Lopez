// Requerimos el enrutado
const router = require("../src/routes");
// Requerir express el cual ya tenemos como dependencia
const express = require("express");
// Requerir morgan
const morgan = require("morgan");
// Requerir cors
const cors = require("cors");
// Inicializamos express dentro de app
const app = express();
// Middleware para registrar las solicitudes HTTP
//!Combined me da: Dirección IP del ciente, Usuario autenticado(si existe), Fecha y hora de la solicitud, Método HTTP('GET', 'POST', etc), URL solicitada, Código de estado de la respueta HTTP, Tamaño de la respuesta en bytes, referencia de la solicitud(URL de la página que hizo la solicitud), Agente de usuario(información sobre el navegador del cliente).
app.use(morgan("combined"));
// Middleware para permitir solicitudes desde cualquier origen
app.use(cors());
// Middleware para analizar el cuerpo de las solicitudes en formato JSON
app.use(express.json());
// Hacemos que app pueda conocer y utilizar el enrutador con el metodo USE
app.use(router);
// Ponemos a disposición app
module.exports = app;
