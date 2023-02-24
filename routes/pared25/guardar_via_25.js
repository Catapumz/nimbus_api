const express = require("express");
const router = express.Router();

const { crear } = require("../../controllers/pared25/guardar_via_25");

// Rutas de pruebas
router.post("/guardar_via", crear);

module.exports = router;
