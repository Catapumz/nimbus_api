const express = require("express");
const router = express.Router();

const { consulta } = require("../controllers/15/buscar");

// Rutas de pruebas
router.get("/listar/15/:buscar?", consulta);

module.exports = router;
