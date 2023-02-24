const express = require("express");
const router = express.Router();

const { consulta } = require("../../controllers/pared15/listar_bloque_15");

// Rutas de pruebas
router.get("/listar_bloque", consulta);

module.exports = router;
