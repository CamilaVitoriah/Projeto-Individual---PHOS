var database = require("../database/config");

function obterDadosGrafico() {
    var instrucaoSql = `
        SELECT 
            DATE_FORMAT(dataRegistro, '%d/%m') AS dia,
            formulario.perguntasSeis
        FROM resultado
        JOIN formulario ON resultado.fkFormulario = formulario.idFormulario
        ORDER BY dataRegistro DESC
        LIMIT 7;
    `;

        return database.executar(instrucaoSql);
}
    function obterDadosIndicador1() {
    var instrucaoSql = `
        SELECT AVG(semana.perguntasUm) AS indicador1 FROM (
        SELECT formulario.perguntasUm FROM resultado
        JOIN formulario ON resultado.fkFormulario = formulario.idFormulario
        ORDER BY dataRegistro DESC
        LIMIT 7) AS semana;  `;

            return database.executar(instrucaoSql);
}

    function obterDadosIndicador2() {
    var instrucaoSql = `
        SELECT AVG(semana.perguntasDois) AS indicador2 FROM (
        SELECT formulario.perguntasDois FROM resultado
        JOIN formulario ON resultado.fkFormulario = formulario.idFormulario
        ORDER BY dataRegistro DESC
        LIMIT 7) AS semana;  `;

            return database.executar(instrucaoSql);
}

    function obterDadosIndicador3() {
    var instrucaoSql = `
        SELECT AVG(semana.perguntasTres) AS indicador3 FROM (
        SELECT formulario.perguntasTres FROM resultado
        JOIN formulario ON resultado.fkFormulario = formulario.idFormulario
        ORDER BY dataRegistro DESC
        LIMIT 7) AS semana;  `;

            return database.executar(instrucaoSql);
}

    function obterDadosIndicador4() {
    var instrucaoSql = `
        SELECT AVG(semana.perguntasQuatro) AS indicador4 FROM (
        SELECT formulario.perguntasQuatro FROM resultado
        JOIN formulario ON resultado.fkFormulario = formulario.idFormulario
        ORDER BY dataRegistro DESC
        LIMIT 7) AS semana;  `;

            return database.executar(instrucaoSql);
}


module.exports = {
    obterDadosGrafico,
    obterDadosIndicador1,
    obterDadosIndicador2,
    obterDadosIndicador3,
    obterDadosIndicador4
};