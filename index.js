//Inicializar app
const { conexion } = require("./database/conexion"); //importamos función conexion del archivo conexion(previamente la exportamos en este archivo)
const express = require("express"); //asignamos a express las funciones de la libreria express
const cors = require("cors"); // lo mismo que arriba pero conn cors

const routes_listar_bloque_15 = require("./routes/pared15/listar_bloque_15");
const routes_listar_via_15 = require("./routes/pared15/listar_via_15");
const routes_listar_bloque_25 = require("./routes/pared25/listar_bloque_25");
const routes_listar_via_25 = require("./routes/pared25/listar_via_25");

const routes_guardar_bloque_15 = require("./routes/pared15/guardar_bloque_15");
const routes_guardar_via_15 = require("./routes/pared15/guardar_via_15");
const routes_guardar_bloque_25 = require("./routes/pared25/guardar_bloque_25");
const routes_guardar_via_25 = require("./routes/pared25/guardar_via_25");

const routes_listar = require("./routes/listar_general");
const routes_guardar = require("./routes/guardar_general");
const routes_borrar = require("./routes/borrar_general");
const routes_editar = require("./routes/editar_general");

async function main() {
  console.log("App de node arrancada");

  //Conectar a la base de datos
  await conexion();

  //Crear servidor Node
  const app = express();
  const puerto = 3000;

  //Configurar cors
  app.use(cors()); //middleware (?)

  //Convertir body a objeto js
  app.use(express.json()); //recibir datos con content-type app/json
  app.use(express.urlencoded({ extended: true })); //recibir datos form-urlencoded

  //Crear rutas

  app.use("/pared15", routes_listar_bloque_15);
  app.use("/pared15", routes_listar_via_15);
  app.use("/pared25", routes_listar_bloque_25);
  app.use("/pared25", routes_listar_via_25);

  app.use("/pared15", routes_guardar_bloque_15);
  app.use("/pared15", routes_guardar_via_15);
  app.use("/pared25", routes_guardar_bloque_25);
  app.use("/pared25", routes_guardar_via_25);

  app.use("/", routes_listar);
  app.use("/", routes_guardar);
  app.use("/", routes_borrar);
  app.use("/", routes_editar);

  //Crear servidor y escuchar peticiones http
  app.listen(puerto, () => {
    console.log("Servidor corriendo en el puerto " + puerto);
  });
}

main();
