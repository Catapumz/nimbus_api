const express = require("express");
const router = express.Router();

const { consulta } = require("../../controllers/pared15/listar_via_15");

// Rutas de pruebas
router.get("/listar_via", consulta);

module.exports = router;
