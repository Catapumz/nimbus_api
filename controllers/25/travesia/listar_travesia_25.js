const Bloques_vias = require("../../../models/Bloques_vias");

const consulta_bloque = async (req, res) => {
  let consulta_bloque = await Bloques_vias.find({
    isbloque: "Travesía",
    quepared: "25",
  }).exec((error, bloques) => {
    // ejecuto.find sobre una CLASE Bloques_vias, bloques es un array con objetos

    console.log(req.body);

    return res.status(200).json({
      status: "Éxito, aquí están las travesías de la pared de 25",
      vias: bloques,
    });
  });
};

module.exports = { consulta_bloque };
