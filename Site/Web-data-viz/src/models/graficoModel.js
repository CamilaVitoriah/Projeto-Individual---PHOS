var database = require("../database/config")

function BuscarUsuarioSemana(idUsuario) {
    var instrucaoSql = `SELECT * FROM formulario AS f
    JOIN resultado AS r ON idFormulario = fkFormulario
    WHERE r.fkUsuario = ${idUsuario}
    ORDER BY r.dataRegistro DESC;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    BuscarUsuarioSemana
};