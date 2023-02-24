const Bloques_vias = require("../models/Bloques_vias");

const consulta = async (req, res) => {
  let consulta = await Bloques_vias.find({}).exec((error, bloques) => {
    // ejecuto.find sobre una CLASE Bloques_vias, bloques es un array con objetos
    console.log(req.body);
    if (error || !bloques) {
      return res.status(400).json({
        status: "error",
        mensaje: "Ha habido un error / No hay bloques",
      });
    }

    return res.status(200).json({
      status: "Éxito, aquí están los bloques de la pared de 25",
      tuputamadre: bloques,
    });
  });
};

module.exports = { consulta };
