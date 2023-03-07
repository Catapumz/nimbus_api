const express = require("express");
const {
  consulta_bloque,
} = require("../controllers/25/travesia/listar_travesia_25_dificultad");
const router = express.Router();

// Rutas de pruebas
router.get("/listar/travesia/25/:dificultad?", consulta_bloque);

module.exports = router;
