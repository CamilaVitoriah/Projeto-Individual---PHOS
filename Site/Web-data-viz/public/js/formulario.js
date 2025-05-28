var perguntasUm = 0;
var perguntasDois = 0;
var perguntasTres = 0;
var perguntasQuatro = 0;
var perguntasCinco = 0;
var perguntasSeis = 0;


//Pergunta 1 
function bt_1perguntas1(){
  perguntasUm = 1;
}

function bt_1perguntas2(){
  perguntasUm = 2;
}

function bt_1perguntas3(){
  perguntasUm = 3;
}

function bt_1perguntas4(){
  perguntasUm = 4;
}

function bt_1perguntas5(){
  perguntasUm = 5;
}

//Perguntas 2 
function bt_2perguntas1(){
    perguntasDois = 1;
}
function bt_2perguntas2(){
    perguntasDois = 2;
}
function bt_2perguntas3(){
    perguntasDois = 3;
}
function bt_2perguntas4(){
    perguntasDois = 4;
}
function bt_2perguntas5(){
    perguntasDois = 5;
}

//Pergunta 3
function bt_3perguntas1(){
    perguntasTres = 1;
}
function bt_3perguntas2(){
    perguntasTres = 2;
}
function bt_3perguntas3(){
    perguntasTres = 3;
}
function bt_3perguntas4(){
    perguntasTres = 4;
}
function bt_3perguntas5(){
    perguntasTres = 5;
}
function bt_3perguntas6(){
    perguntasTres = 6;
}
function bt_3perguntas7(){
    perguntasTres = 7;
}


//Pergunta 4
function bt_4perguntas1(){
    perguntasQuatro = 1;
}
function bt_4perguntas2(){
    perguntasQuatro = 2;
}
function bt_4perguntas3(){
    perguntasQuatro = 3;
}
function bt_4perguntas4(){
    perguntasQuatro = 4;
}
function bt_4perguntas5(){
    perguntasQuatro = 5;
}
function bt_4perguntas6(){
    perguntasQuatro = 6;
}
function bt_4perguntas7(){
    perguntasQuatro = 7;
}

//Pergunta 5
function bt_5perguntas1(){
    perguntasCinco = 1;
}
function bt_5perguntas2(){
    perguntasCinco = 2;
}
function bt_5perguntas3(){
    perguntasCinco = 3;
}
function bt_5perguntas4(){
    perguntasCinco = 4;
}
function bt_5perguntas5(){
    perguntasCinco = 5;
}

//Pergunta 6
function bt_6perguntas1(){
    perguntasSeis = 1;
}
function bt_6perguntas2(){
    perguntasSeis = 2;
}
function bt_6perguntas3(){
    perguntasSeis = 3;
}
function bt_6perguntas4(){
    perguntasSeis = 4;
}
function bt_6perguntas5(){
    perguntasSeis = 5;
}
function bt_6perguntas6(){
    perguntasSeis = 6;
}
function bt_6perguntas7(){
    perguntasSeis = 7;
}

function finalizar(){
    
}
function enviarFormulario() {
const fkUsuario = sessionStorage.ID_USUARIO;

    fetch("/formulario/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            perguntasUm: perguntasUm,
            perguntasDois: perguntasDois,
            perguntasTres: perguntasTres,
            perguntasQuatro: perguntasQuatro,
            perguntasCinco: perguntasCinco,
            perguntasSeis: perguntasSeis,
            fkUsuario
        })
    })
    .then(resposta => {
        if (resposta.ok) {
            alert("Formulário enviado com sucesso!");
            window.location = "dashboard.html";
        } else {
            alert("Houve um erro ao enviar o formulário.");
            console.error(resposta);
        }
    })
    .catch(erro => {
        console.log("Erro na requisição:", erro);
    });
}