const Bloques_vias = require("../../../models/Bloques_vias");
const ndificultad = require("../../convertir_dificultad");
const consulta_bloque = async (req, res) => {
  let dificultad = await ndificultad(req.params.dificultad);
  console.log(dificultad);
  let consulta_bloque = await Bloques_vias.find({
    isbloque: "Travesía",
    quepared: "15",
    dificultad: dificultad,
  }).exec((error, bloques) => {
    // ejecuto.find sobre una CLASE Bloques_vias, bloques es un array con objetos

    console.log(req.body);

    return res.status(200).json({
      status: "Éxito, aquí está tu búsqueda",
      vias: bloques,
    });
  });
};

module.exports = { consulta_bloque };
