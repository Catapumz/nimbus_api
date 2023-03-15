const express = require("express"); //asignamos a express las funciones de la libreria express
const cors = require("cors"); // lo mismo que arriba pero conn cors

const routes_listar = require("./routes/listar_general");
const routes_listar_25 = require("./routes/listar_25");
const routes_listar_15 = require("./routes/listar_15");

const routes_listar_bloque_15_dificultad = require("./routes/listar_bloque_15_dificultad");
const routes_listar_travesia_15_dificultad = require("./routes/listar_travesia_15_dificultad");
const routes_listar_bloque_25_dificultad = require("./routes/listar_bloque_25_dificultad");
const routes_listar_travesia_25_dificultad = require("./routes/listar_travesia_25_dificultad");

const routes_buscar_25 = require("./routes/buscar_25");
const routes_buscar_15 = require("./routes/buscar_15");

const routes_listar_travesia_25 = require("./routes/listar_travesia_25");

const routes_listar_bloque_25 = require("./routes/listar_bloque_25");

const routes_guardar = require("./routes/guardar_general");
const routes_borrar = require("./routes/borrar_general");
const routes_editar = require("./routes/editar_general");
const PORT = 3000;

function conexionApp() {
  //Crear servidor Node
  const app = express();

  //Configurar cors
  app.use(cors()); //middleware (?)

  //Convertir body a objeto js
  app.use(express.json()); //recibir datos con content-type app/json
  app.use(express.urlencoded({ extended: true })); //recibir datos form-urlencoded

  //Crear rutas
  //listar general
  app.use("/", routes_listar);
  //listar 15

  app.use("/", routes_listar_15);
  //listar 25

  app.use("/", routes_listar_25);
  //listar bloques

  app.use("/", routes_listar_bloque_25);
  //listar travesias

  app.use("/", routes_listar_travesia_25);
  //listar bloques por dificultad

  app.use("/", routes_listar_bloque_15_dificultad);
  app.use("/", routes_listar_bloque_25_dificultad);
  //listar travesias por dificultad

  app.use("/", routes_listar_travesia_15_dificultad);
  app.use("/", routes_listar_travesia_25_dificultad);
  //buscar en 15

  app.use("/", routes_buscar_15);
  //buscar en 25

  app.use("/", routes_buscar_25);
  //guardar una entrada

  app.use("/", routes_guardar);
  //borrar una entrada

  app.use("/", routes_borrar);
  //editar una entrada

  app.use("/", routes_editar);

  //Crear servidor y escuchar peticiones http
  app.listen(PORT, () =>
    console.log("Servidor corriendo en el puerto " + PORT)
  );
}

module.exports = { conexionApp };
