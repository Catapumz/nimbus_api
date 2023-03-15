//Inicializar app
const { conexion } = require("./src/conexion"); //importamos función conexion del archivo conexion(previamente la exportamos en este archivo)
const { conexionApp } = require("./src/app");

async function main() {
  console.log("App de node arrancada");

  //Conectar a la base de datos
  await conexion();
  conexionApp();
}

main();
