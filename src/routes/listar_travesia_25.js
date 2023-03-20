const express = require("express");
const {
  consulta_bloque,
} = require("../controllers/25/travesia/listar_travesia_25");
const router = express.Router();

// Rutas de pruebas
router.get("/listar/25/travesia", consulta_bloque);

module.exports = router;
