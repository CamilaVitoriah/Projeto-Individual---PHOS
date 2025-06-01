var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.get("/grafico", function (req, res) {
    dashController.obterDadosGrafico(req, res);
});

router.get("/DadosIndicador1", function (req, res) {
    dashController.obterDadosIndicador1(req, res);
});

router.get("/DadosIndicador2", function (req, res) {
    dashController.obterDadosIndicador2(req, res);
});

router.get("/DadosIndicador3", function (req, res) {
    dashController.obterDadosIndicador3(req, res);
});

router.get("/DadosIndicador4", function (req, res) {
    dashController.obterDadosIndicador4(req, res);
});



module.exports = router;