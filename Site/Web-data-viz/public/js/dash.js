function Monitoramento(){//Direciona para o formulário
window.location.href = "./formulario.HTML";}

const fkUsuario = sessionStorage.ID_USUARIO; 


//Visão da Dash
fetch(`/formulario/buscar/${fkUsuario}`)
    .then(resposta => resposta.json())
    .then(dados => {
        console.log("Dados recebidos para o gráfico:", dados);

        const labels = dados.map(registro => registro.data).reverse();
        const dadosPergunta6 = dados.map(registro => registro.perguntasSeis).reverse();

        const ctx = document.getElementById('myChart');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Pergunta 6',
                    data: dadosPergunta6,
                    borderColor: '#f2763c',
                    backgroundColor: '#f2763c',
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    })
    .catch(erro => {
        console.error("Erro ao carregar os dados do gráfico:", erro);
    });


    fetch(`/dash/DadosIndicador1`)
    .then(res => res.json())
    .then(dados => {
        var indicador1 = Number(Math.round(dados[0].indicador1));
        var mensagem = ``
        var lista_p1 = ['Sem Resposta','Cansado', 'Triste', 'Neutro', 'Feliz', 'Disposto']
        

            for (var i =0; i < lista_p1.length; i++){

                if (indicador1 == 0){
                    mensagem = `${lista_p1[0]}`
                }
                else if (indicador1 == 1){
                    mensagem = `${lista_p1[1]}`
                }
                else if (indicador1 == 2){
                    mensagem = `${lista_p1[2]}`
                }
                else if (indicador1 == 3){
                    mensagem = `${lista_p1[3]}`
                }
                else if (indicador1 == 4){
                    mensagem = `${lista_p1[4]}`
                }
                else if (indicador1 == 5){
                    mensagem = `${lista_p1[5]}`
                }
        }
        document.getElementById('indicador1').innerHTML =
        `${mensagem}`;
    
    })
    .catch(erro => {
        console.error("Erro ao carregar o indicador:", erro);
    });

    fetch(`/dash/DadosIndicador2`)
    .then(res => res.json())
    .then(dados => {
        var indicador2 = Number(Math.round(dados[0].indicador2));
        var mensagem2 = ``
        var lista_p2 = ['Sem Resposta','Cansado', 'Triste', 'Neutro', 'Feliz', 'Disposto']
        

            for (var i =0; i < lista_p2.length; i++){

                if (indicador2 == 0){
                    mensagem2 = `${lista_p2[0]}`
                }
                else if (indicador2 == 1){
                    mensagem2 = `${lista_p2[1]}`
                }
                else if (indicador2 == 2){
                    mensagem2 = `${lista_p2[2]}`
                }
                else if (indicador2 == 3){
                    mensagem2 = `${lista_p2[3]}`
                }
                else if (indicador2 == 4){
                    mensagem2 = `${lista_p2[4]}`
                }
                else if (indicador2 == 5){
                    mensagem2 = `${lista_p2[5]}`
                }
        }
        document.getElementById('indicador2').innerHTML =
        `${mensagem2}`;
    
    })
    .catch(erro => {
        console.error("Erro ao carregar o indicador:", erro);
    });

        fetch(`/dash/DadosIndicador3`)
    .then(res => res.json())
    .then(dados => {
        var indicador3 = Number(Math.round(dados[0].indicador3));
        var mensagem3 = ``
        var lista_p3= ['Sem Resposta','Cansado', 'Triste', 'Neutro', 'Feliz', 'Disposto']
        

            for (var i =0; i < lista_p3.length; i++){

                if (indicador3 == 0){
                    mensagem3 = `${lista_p3[0]}`
                }
                else if (indicador3 == 1){
                    mensagem3 = `${lista_p3[1]}`
                }
                else if (indicador3 == 2){
                    mensagem3 = `${lista_p3[2]}`
                }
                else if (indicador3 == 3){
                    mensagem3 = `${lista_p3[3]}`
                }
                else if (indicador3 == 4){
                    mensagem3 = `${lista_p3[4]}`
                }
                else if (indicador3 == 5){
                    mensagem3 = `${lista_p3[5]}`
                }
        }
        document.getElementById('indicador3').innerHTML =
        `${mensagem3}`;
    
    })
    .catch(erro => {
        console.error("Erro ao carregar o indicador:", erro);
    });

        fetch(`/dash/DadosIndicador4`)
    .then(res => res.json())
    .then(dados => {
        var indicador4 = Number(Math.round(dados[0].indicador4));
        var mensagem4 = ``
        var lista_p4 = ['Sem Resposta','Cansado', 'Triste', 'Neutro', 'Feliz', 'Disposto']
        

            for (var i =0; i < lista_p4.length; i++){

                if (indicador4 == 0){
                    mensagem4 = `${lista_p4[0]}`
                }
                else if (indicador4 == 1){
                    mensagem4 = `${lista_p4[1]}`
                }
                else if (indicador4 == 2){
                    mensagem4 = `${lista_p4[2]}`
                }
                else if (indicador4 == 3){
                    mensagem4 = `${lista_p4[3]}`
                }
                else if (indicador4 == 4){
                    mensagem4 = `${lista_p4[4]}`
                }
                else if (indicador4 == 5){
                    mensagem4 = `${lista_p4[5]}`
                }
        }
        document.getElementById('indicador4').innerHTML =
        `${mensagem4}`;
    
    })
    .catch(erro => {
        console.error("Erro ao carregar o indicador:", erro);
    });