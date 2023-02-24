const Via15 = require("../../models/Via15");

const consulta = async (req, res) => {
  let consulta = await Via15.find({}).exec((error, vias) => {
    // ejecuto.find sobre una CLASE Via15, vias es un array con objetos

    if (error || !vias) {
      return res.status(400).json({
        status: "error",
        mensaje: "Ha habido un error / No hay vias",
      });
    }

    return res.status(200).json({
      status: "Éxito, aquí están las vias de la pared de 15",
      vias,
    });
  });
};

module.exports = { consulta };
