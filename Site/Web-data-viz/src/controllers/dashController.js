var formularioModel = require("../models/formularioModel");

function buscarDados(req, res) {
    const fkUsuario = req.params.fkUsuario;

    formularioModel.buscarUltimosDados(fkUsuario)
        .then(resultado => {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    buscarDados
};