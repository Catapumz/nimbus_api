const express = require("express");
const router = express.Router();

const { consulta } = require("../controllers/25/buscar");

// Rutas de pruebas
router.get("/listar/25/:buscar?", consulta);

module.exports = router;
