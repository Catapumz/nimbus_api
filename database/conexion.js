const mongoose = require("mongoose"); // no entiendo por que
mongoose.set("strictQuery", true);
const conexion = async () => {
  await mongoose.connect("mongodb://mongo:3010/NIMBUS");

  console.log("connectado correctamente a blog");
};

module.exports = {
  conexion,
};
