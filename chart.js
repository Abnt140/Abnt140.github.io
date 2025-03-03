document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('barchart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Triássico', 'Jurássico', 'Cretáceo'],
            datasets: [{
                label: 'Temperatura Média (°C)',
                data: [30, 28, 32],
                backgroundColor: [
                    'rgba(139, 69, 19, 0.6)',
                    'rgba(194, 161, 119, 0.6)',
                    'rgba(228, 207, 161, 0.6)'
                ],
                borderColor: [
                    'rgba(139, 69, 19, 1)',
                    'rgba(194, 161, 119, 1)',
                    'rgba(228, 207, 161, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Temperatura Média (°C)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Períodos do Mesozoico'
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            }
        }
    });
});