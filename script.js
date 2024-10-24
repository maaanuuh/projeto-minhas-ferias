// Lista de curiosidades sobre golfinhos
const curiosidades = [
    "Golfinhos podem se comunicar entre si através de assobios e cliques.",
    "Os golfinhos dormem com um olho aberto para se proteger de predadores.",
    "Golfinhos podem alcançar velocidades de até 25 km/h na água.",
    "Algumas espécies de golfinhos podem saltar até 6 metros fora da água.",
    "Os golfinhos têm uma forte conexão social e vivem em grupos chamados de cardumes."
];

// Função para mostrar uma curiosidade aleatória
function mostrarCuriosidade() {
    // Seleciona uma curiosidade aleatória da lista
    const curiosidadeAleatoria = curiosidades[Math.floor(Math.random() * curiosidades.length)];
    
    // Exibe a curiosidade no elemento HTML
    const elementoCuriosidade = document.getElementById('curiosidade-texto');
    elementoCuriosidade.textContent = curiosidadeAleatoria;
}

// Adiciona um evento ao botão para mostrar a curiosidade quando for clicado
const botao = document.getElementById('curiosidade-btn');
botao.addEventListener('click', mostrarCuriosidade);
