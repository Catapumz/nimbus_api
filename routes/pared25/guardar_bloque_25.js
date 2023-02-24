const express = require("express");
const router = express.Router();

const { crear } = require("../../controllers/pared25/guardar_bloque_25");

// Rutas de pruebas
router.post("/guardar_bloque", crear);

module.exports = router;
