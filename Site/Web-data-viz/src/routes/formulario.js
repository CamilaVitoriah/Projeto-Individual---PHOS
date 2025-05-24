var express = require("express");
var router = express.Router();

var formularioController = require("../controllers/formularioController");

// Rota para cadastrar dados do formulário
router.post("/cadastrar", function (req, res) {
    formularioController.cadastrar(req, res);
});

module.exports = router;