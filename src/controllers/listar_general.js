const Bloques_vias = require("../models/Bloques_vias");
const ndificultad = require("./convertir_dificultad");

const consulta = async (req, res) => {
  const { isbloque, quepared } = req.body;
  const dificultad = ndificultad[req.body.dificultad];

  const bloques = await Bloques_vias.find({ dificultad, isbloque, quepared });

  return res.status(200).json({
    vias: bloques,
  });
};

module.exports = { consulta };
