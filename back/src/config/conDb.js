// Requerir la dependencia "dotenv"
require("dotenv").config();
const mongoose = require("mongoose");

const dbCon = async () => {
  // Realizar la conexión con la base de datos
  await mongoose.connect(
    // Utiilza la Uri de conexión que oculto con dotenv
    //! MONGO_URI=mongodb+srv://Jeison:Zbl0jpv2Ho8XsPNq@cluster.kguy3xj.mongodb.net/Henry?retryWrites=true&w=majority&appName=Cluster
    process.env.MONGO_URI
  );
};

module.exports = dbCon;
