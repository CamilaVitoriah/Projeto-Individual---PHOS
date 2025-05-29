var express = require("express");
var router = express.Router();

var formularioController = require("../controllers/formularioController");

router.get("/buscar/:fkUsuario", function (req, res) {
    formularioController.buscarDados(req, res);
});

module.exports = router;