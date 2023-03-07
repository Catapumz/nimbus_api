const Bloques_vias = require("../models/Bloques_vias");

const consulta = async (req, res) => {
  let bloque = "Bloque";
  let consulta = await Bloques_vias.find({}).exec((error, bloques) => {
    // ejecuto.find sobre una CLASE Bloques_vias, bloques es un array con objetos
    console.log(req.body);

    return res.status(200).json({
      status: "Éxito, aquí están los bloques de la pared de 25",
      vias: bloques,
    });
  });
};

module.exports = { consulta };
