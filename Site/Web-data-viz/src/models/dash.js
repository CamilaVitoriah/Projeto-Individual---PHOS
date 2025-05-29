var database = require("../database/config");

function buscarUltimosDados(fkUsuario) {
    console.log("Acessando o formularioModel para buscar os dados do gráfico.");

    const instrucaoSql = `
        SELECT perguntasSeis, DATE_FORMAT(dataCadastro, '%d/%m') AS data
        FROM formulario
        WHERE fkUsuario = ${fkUsuario}
        ORDER BY idFormulario DESC
        LIMIT 7;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimosDados
};