        const ctx = document.getElementById('myChart');
  
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Dia 1', 'Dia 2', 'Dia 3', 'Dia 4', 'Dia 5', 'Dia 6', 'Dia 7'],
        datasets: [{
          label: 'Temperatura',
          data: [1, 2, 3, 6, 7, 8,8],//Api com os ultimos dados da pergunta 6
          borderColor: '#f2763c',
          backgroundColor: '#f2763c',
          borderWidth: 1
        },{
          label: 'Umidade',
          data: [4, 4, 4, 4, 4, 4, 4],
          borderColor: '#41577c',
          backgroundColor: '#41577c',
          borderWidth: 1
        }
    ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });