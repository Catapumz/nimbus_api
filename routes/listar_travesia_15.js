const express = require("express");
const {
  consulta_bloque,
} = require("../controllers/15/travesia/listar_travesia_15");
const router = express.Router();

// Rutas de pruebas
router.get("/listar/travesia/15", consulta_bloque);

module.exports = router;
