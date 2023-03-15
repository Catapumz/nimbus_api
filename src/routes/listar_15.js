const express = require("express");
const router = express.Router();

const { consulta } = require("../controllers/15/listar_15");

// Rutas de pruebas
router.get("/listar/15", consulta);

module.exports = router;
