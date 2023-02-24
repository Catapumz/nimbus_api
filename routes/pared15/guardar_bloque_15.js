const express = require("express");
const router = express.Router();

const { crear } = require("../../controllers/pared15/guardar_bloque_15");

// Rutas de pruebas
router.post("/guardar_bloque", crear);

module.exports = router;
