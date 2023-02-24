const express = require("express");
const router = express.Router();

const { consulta } = require("../../controllers/pared25/listar_via_25");

// Rutas de pruebas
router.get("/listar_via", consulta);

module.exports = router;
