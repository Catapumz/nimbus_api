const Via25 = require("../../models/Via25");

const consulta = async (req, res) => {
  let consulta = await Via25.find({}).exec((error, vias) => {
    // ejecuto.find sobre una CLASE Via25, vias es un array con objetos

    if (error || !vias) {
      return res.status(400).json({
        status: "error",
        mensaje: "Ha habido un error / No hay vias",
      });
    }

    return res.status(200).json({
      status: "Éxito, aquí están las vias de la pared de 25",
      vias,
    });
  });
};

module.exports = { consulta };
