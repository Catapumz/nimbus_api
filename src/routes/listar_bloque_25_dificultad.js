const express = require("express");
const {
  consulta_bloque,
} = require("../controllers/25/bloque/listar_bloque_25_dificultad");
const router = express.Router();

// Rutas de pruebas
router.get("/listar/25/bloque/:dificultad?", consulta_bloque);

module.exports = router;
