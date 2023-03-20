const express = require("express");
const {
  consulta_bloque,
} = require("../controllers/15/travesia/listar_travesia_15_dificultad");
const router = express.Router();

// Rutas de pruebas
router.get("/listar/15/travesia/:dificultad?", consulta_bloque);

module.exports = router;
