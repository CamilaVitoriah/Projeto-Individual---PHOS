var database = require("../database/config");

function cadastrarFormulario(perguntasUm, perguntasDois, perguntasTres, perguntasQuatro, perguntasCinco, perguntasSeis) {
    var instrucao = `
        INSERT INTO formulario (perguntasUm, perguntasDois, perguntasTres, perguntasQuatro, perguntasCinco, perguntasSeis)
        VALUES (${perguntasUm}, ${perguntasDois}, ${perguntasTres}, ${perguntasQuatro}, ${perguntasCinco}, ${perguntasSeis});
    `;
    console.log("Executando SQL:", instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrarFormulario
};