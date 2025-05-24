var formularioModel = require("../models/formularioModel");

function cadastrar(req, res) {
    var { perguntasUm, perguntasDois, perguntasTres, perguntasQuatro, perguntasCinco, perguntasSeis } = req.body;

    formularioModel.cadastrarFormulario(perguntasUm, perguntasDois, perguntasTres, perguntasQuatro, perguntasCinco, perguntasSeis)
        .then(function (resultado) {
            res.status(200).json({ mensagem: "Formulário cadastrado com sucesso!", resultado });
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json({ mensagem: "Erro ao cadastrar formulário.", erro });
        });
}

module.exports = {
    cadastrar
};