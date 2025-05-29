const fkUsuario = sessionStorage.ID_USUARIO; // Pega o ID do usuário logado

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