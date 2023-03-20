const express = require("express");
const {
  consulta_bloque,
} = require("../controllers/15/bloque/listar_bloque_15_dificultad");
const router = express.Router();

// Rutas de pruebas
router.get("/listar/15/bloque/:dificultad?", consulta_bloque);

module.exports = router;
