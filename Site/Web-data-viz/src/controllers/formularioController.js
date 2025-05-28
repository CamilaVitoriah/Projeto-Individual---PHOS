var formularioModel = require("../models/formularioModel");

function cadastrar(req, res) {
    const { perguntasUm, perguntasDois, perguntasTres, perguntasQuatro, perguntasCinco, perguntasSeis, fkUsuario } = req.body;

    console.log("Dados recebidos no formulário:", req.body);

    formularioModel.cadastrarFormulario(perguntasUm, perguntasDois, perguntasTres, perguntasQuatro, perguntasCinco, perguntasSeis)
        .then(() => {
            return formularioModel.cadastrarResultado(fkUsuario);
        })
        .then(() => {
            res.status(200).json({ mensagem: "Formulário e resultado cadastrados com sucesso!" });
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json({ mensagem: "Erro ao cadastrar.", erro });
        });
}

module.exports = {
    cadastrar
};
