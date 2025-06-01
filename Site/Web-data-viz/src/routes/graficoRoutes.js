var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");

router.get("/usuario/:fkUsuario", graficoController.BuscarUsuarioSemana);


module.exports = router;