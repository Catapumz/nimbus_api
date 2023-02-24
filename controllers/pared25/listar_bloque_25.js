const Bloque25 = require("../../models/Bloque25");

const consulta = async (req, res) => {
  let consulta = await Bloque25.find({}).exec((error, bloques) => {
    // ejecuto.find sobre una CLASE Bloque25, bloques es un array con objetos

    if (error || !bloques) {
      return res.status(400).json({
        status: "error",
        mensaje: "Ha habido un error / No hay bloques",
      });
    }

    return res.status(200).json({
      status: "Éxito, aquí están los bloques de la pared de 25",
      bloques,
    });
  });
};

module.exports = { consulta };
