const express = require("express");
const router = express.Router();

const { crear } = require("../../controllers/pared15/guardar_via_15");

// Rutas de pruebas
router.post("/guardar_via", crear);

module.exports = router;
