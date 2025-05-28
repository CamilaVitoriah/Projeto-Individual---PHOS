var database = require("../database/config");

function cadastrarFormulario(perguntasUm, perguntasDois, perguntasTres, perguntasQuatro, perguntasCinco, perguntasSeis) {
    var instrucao = `
        INSERT INTO formulario (perguntasUm, perguntasDois, perguntasTres, perguntasQuatro, perguntasCinco, perguntasSeis)
        VALUES (${perguntasUm}, ${perguntasDois}, ${perguntasTres}, ${perguntasQuatro}, ${perguntasCinco}, ${perguntasSeis});
    `;
    console.log("Executando SQL do formulário:", instrucao);
    return database.executar(instrucao);
}

function cadastrarResultado(fkUsuario) {
    var instrucao = `
        INSERT INTO resultado (fkUsuario)
        VALUES (${fkUsuario});
    `;
    console.log("Executando SQL do resultado:", instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrarFormulario,
    cadastrarResultado
};
