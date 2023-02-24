const Bloque15 = require("../../models/Bloque15");

const consulta = async (req, res) => {
  let consulta = await Bloque15.find({}).exec((error, bloques) => {
    // ejecuto.find sobre una CLASE Bloque15, bloques es un array con objetos

    if (error || !bloques) {
      return res.status(400).json({
        status: "error",
        mensaje: "Ha habido un error / No hay bloques",
      });
    }

    return res.status(200).json({
      status: "Éxito, aquí están los bloques de la pared de 15",
      bloques,
    });
  });
};

module.exports = { consulta };
