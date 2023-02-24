const express = require("express");
const router = express.Router();

const { editar } = require("../controllers/editar_general");

// Rutas de pruebas
router.put("/editar/:id?", editar);

module.exports = router;
