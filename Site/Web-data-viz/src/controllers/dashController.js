var dashModel = require("../models/dashModel");

function obterDadosGrafico(req, res) {
    dashModel.obterDadosGrafico()
        .then(resultado => {
            res.status(200).json(resultado);
        }).catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}


function obterDadosIndicador1(req, res) {
    dashModel.obterDadosIndicador1()
        .then(resultado => {
            res.status(200).json(resultado);
        }).catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function obterDadosIndicador2(req, res) {
    dashModel.obterDadosIndicador2()
        .then(resultado => {
            res.status(200).json(resultado);
        }).catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function obterDadosIndicador3(req, res) {
    dashModel.obterDadosIndicador3()
        .then(resultado => {
            res.status(200).json(resultado);
        }).catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function obterDadosIndicador4(req, res) {
    dashModel.obterDadosIndicador4()
        .then(resultado => {
            res.status(200).json(resultado);
        }).catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}


module.exports = {
    obterDadosGrafico,
    obterDadosIndicador1,
    obterDadosIndicador2,
    obterDadosIndicador3,
    obterDadosIndicador4
};