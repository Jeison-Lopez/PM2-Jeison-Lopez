// Requerir la dependencia "dotenv"
require("dotenv").config();
const mongoose = require("mongoose");

const dbCon = async () => {
  // Realizar la conexión con la base de datos
  await mongoose.connect(
    // Utiilza la Uri de conexión que oculto con dotenv
    process.env.MONGO_URI
  );
};

module.exports = dbCon;
