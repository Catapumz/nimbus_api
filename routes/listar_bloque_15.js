const express = require("express");
const {
  consulta_bloque,
} = require("../controllers/15/bloque/listar_bloque_15");
const router = express.Router();

// Rutas de pruebas
router.get("/listar/bloque/15", consulta_bloque);

module.exports = router;
