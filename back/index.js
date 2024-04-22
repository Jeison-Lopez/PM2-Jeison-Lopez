// Requireo app (server)
const app = require("./src/server");
// Hacemos que el servidor escuche solicitudes HTTP
app.listen(3000, () => {
  console.log("Servidor en ejecucíon en el puerto 3000");
});
