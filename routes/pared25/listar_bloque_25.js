const express = require("express");
const router = express.Router();

const { consulta } = require("../../controllers/pared25/listar_bloque_25");

// Rutas de pruebas
router.get("/listar_bloque", consulta);

module.exports = router;
