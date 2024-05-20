// Requireo app (server)
const app = require("./src/server");
// Requiero la conexión con la db
const dbCon = require("./src/config/conDb");
// Ejecutar la conexión y controlar sus resultados
dbCon()
  .then((res) => {
    // Hacemos que el servidor escuche solicitudes HTTP
    app.listen(3000, () => {
      console.log("Servidor en ejecucíon en el puerto 3000");
    });
  })
  .catch((erro) => {
    console.log("Error al conectar la BDD");
  });
