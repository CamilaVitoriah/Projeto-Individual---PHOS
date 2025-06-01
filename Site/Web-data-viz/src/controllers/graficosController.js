var graficoModel = require("../models/graficoModel");

function BuscarUsuarioSemana(req, res) {
    var fkUsuario = req.params.fkUsuario;

        graficoModel.BuscarUsuarioSemana(fkUsuario)
            .then( resultado => {
                    if (resultado.length > 0) {
                        res.status (200).json(resultado);
                    } else {
                        res.status(204).send("Nenhum formulário encontrado!");
                    }
                }
            ).catch(
                 erro => {
                    console.log(erro);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

