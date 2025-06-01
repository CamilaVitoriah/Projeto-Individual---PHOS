 function gerarGrafico() {
    fetch("/dash/grafico")
        .then(res => res.json())
        .then(data => {
            console.log(data);

            const labels = data.map(item => item.dia).reverse();
            const valores = data.map(item => item.perguntasSeis).reverse();

            const ctx = document.getElementById('myChart').getContext('2d');
            const graficoLinha = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Impacto dos seus dias',
                        data: valores,
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.3
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: true
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 7
                        }
                    }
                }
            });
        })
        .catch(err => {
            console.error("Erro ao gerar gráfico:", err);
        });
}

window.onload = function () {
    gerarGrafico();
};