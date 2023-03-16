const express = require("express"); //asignamos a express las funciones de la libreria express
const cors = require("cors"); // lo mismo que arriba pero conn cors

const routes_listar = require("./routes/listar_general");

// const routes_buscar_25 = require("./routes/buscar_25");
// const routes_buscar_15 = require("./routes/buscar_15");

const routes_guardar = require("./routes/guardar_general");
const routes_borrar = require("./routes/borrar_general");
const routes_editar = require("./routes/editar_general");

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

//guardar una entrada
app.use("/", routes_guardar);

//borrar una entrada
app.use("/", routes_borrar);

//editar una entrada

app.use("/", routes_editar);

module.exports = { app };
