const express = require("express");
const router = express.Router();

const { borrar } = require("../controllers/borrar_general");

// Rutas de pruebas
router.delete("/borrar/:id?", borrar);

module.exports = router;
