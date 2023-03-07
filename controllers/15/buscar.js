const Bloques_vias = require("../../models/Bloques_vias");

const consulta = async (req, res) => {
  let bloque = "Bloque";
  //let buscar = "manu caruso";
  let buscar = req.params.buscar;
  let consulta = await Bloques_vias.find({
    $or: [
      { autor: { $regex: buscar, $options: "i" } },
      { name: { $regex: buscar, $options: "i" } },
    ],
    quepared: "15",
  }).exec((error, bloques) => {
    // ejecuto.find sobre una CLASE Bloques_vias, bloques es un array con objetos
    console.log(req.body);

    return res.status(200).json({
      status: "Éxito, aquí está tu búsqueda",
      vias: bloques,
    });
  });
};

module.exports = { consulta };
