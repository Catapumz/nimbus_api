const express = require("express");
const router = express.Router();

const { consulta } = require("../controllers/buscar_general");

// Rutas de pruebas
router.get("/listar/:buscar?", consulta);

module.exports = router;
