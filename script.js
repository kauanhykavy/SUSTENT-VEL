// ==========================================
// CONFIGURAÇÃO DOS GRÁFICOS (Chart.js)
// ==========================================

// Aguarda o carregamento completo do DOM para garantir que os elementos <canvas> existam
document.addEventListener("DOMContentLoaded", () => {
    inicializarGraficoImpacto();
    inicializarGraficoCrescimento();
    configurarRolagemSuave();
});

/**
 * Gráfico 1: Distribuição do Consumo Global de Água Doce (Gráfico de Rosca)
 */
function inicializarGraficoImpacto() {
    const ctxImpacto = document.getElementById('graficoImpacto');
    
    // Valida se o elemento existe na página para evitar erros
    if (!ctxImpacto) return;

    new Chart(ctxImpacto.getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: ['Agricultura e Pecuária', 'Uso Industrial', 'Uso Doméstico'],
            datasets: [{
                label: 'Consumo Global (%)',
                data: [70, 20, 10], // Dados percentuais reais sobre o impacto hídrico
                backgroundColor: [
                    '#2c5e3b', // Verde escuro (Agricultura)
                    '#8b5a2b', // Tom terra/marrom (Indústria)
                    '#a3c9a8'  // Verde claro (Doméstico)
                ],
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Distribuição do Consumo Global de Água Doce',
                    font: {
                        size: 16,
                        weight: 'bold',
                        family: "'Segoe UI', sans-serif"
                    },
                    color: '#2b2b2b',
                    padding: { bottom: 20 }
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 15,
                        font: { size: 12 }
                    }
                }
            }
        }
    });
}

/**
 * Gráfico 2: Evolução de Áreas Orgânicas/Sustentáveis (Gráfico de Linha)
 */
function inicializarGraficoCrescimento() {
    const ctxCrescimento = document.getElementById('graficoCrescimento');
    
    if (!ctxCrescimento) return;

    new Chart(ctxCrescimento.getContext('2d'), {
        type: 'line',
        data: {
            labels: ['2015', '2018', '2021', '2024', '2026'], // Linha do tempo
            datasets: [{
                label: 'Adoção de Práticas Sustentáveis (Milhões de Hectares)',
                data: [45, 58, 72, 85, 98], // Dados demonstrativos da tendência global de alta
                borderColor: '#2c5e3b',
                backgroundColor: 'rgba(163, 201, 168, 0.3)', // Fundo semitransparente sob a linha
                fill: true,
                tension: 0.3, // Curvatura da linha de tendência
                pointRadius: 5,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Crescimento Global da Agricultura Sustentável',
                    font: {
                        size: 16,
                        weight: 'bold',
                        family: "'Segoe UI', sans-serif"
                    },
                    color: '#2b2b2b',
                    padding: { bottom: 20 }
                },
                legend: {
                    position: 'bottom'
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: 'Hectares (em Milhões)',
                        font: { weight: '600' }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Anos',
                        font: { weight: '600' }
                    }
                }
            }
        }
    });
}

// ==========================================
// RECURSOS EXTRAS DE INTERATIVIDADE (UX)
// ==========================================

/**
 * Cria uma animação de rolagem suave (Smooth Scroll) ao clicar nos links do menu
 */
function configurarRolagemSuave() {
    const linksMenu = document.querySelectorAll('nav a[href^="#"]');
    
    linksMenu.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Evita o salto brusco padrão do navegador
            
            const idAlvo = this.getAttribute('href');
            const elementoAlvo = document.querySelector(idAlvo);
            
            if (elementoAlvo) {
                // Calcula a posição descontando a altura do menu fixo (header)
                const alturaHeader = document.querySelector('header').offsetHeight;
                const posicaoElemento = elementoAlvo.getBoundingClientRect().top + window.scrollY;
                
                window.scrollTo({
                    top: posicaoElemento - alturaHeader,
                    behavior: 'smooth' // Ativa o deslizamento suave
                });
            }
        });
    });
}