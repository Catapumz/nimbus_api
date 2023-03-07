const express = require("express");
const router = express.Router();

const { consulta } = require("../controllers/25/listar_25");

// Rutas de pruebas
router.get("/listar/25", consulta);

module.exports = router;
