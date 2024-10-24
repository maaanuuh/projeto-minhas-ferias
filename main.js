// Função para mostrar uma curiosidade aleatória
const curiosidades = [
    "Golfinhos podem se comunicar entre si através de assobios e cliques.",
    "Os golfinhos dormem com um olho aberto para se proteger de predadores.",
    "Golfinhos podem alcançar velocidades de até 25 km/h na água.",
    "Algumas espécies de golfinhos podem saltar até 6 metros fora da água.",
    "Os golfinhos têm uma forte conexão social e vivem em grupos chamados de cardumes."
];

function mostrarCuriosidade() {
    const curiosidadeAleatoria = curiosidades[Math.floor(Math.random() * curiosidades.length)];
    const elementoCuriosidade = document.getElementById('curiosidade-texto');
    elementoCuriosidade.textContent = curiosidadeAleatoria;
}

document.getElementById('curiosidade-btn').addEventListener('click', mostrarCuriosidade);

// Função para rolar suavemente para uma seção específica
document.getElementById('rolar-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const curiosidadeSection = document.querySelector('#curiosidade-texto');
    curiosidadeSection.scrollIntoView({ behavior: 'smooth' });
});

// Função para alternar entre tema claro e escuro
const botaoTema = document.getElementById('tema-btn');
botaoTema.addEventListener('click', function() {
    document.body.classList.toggle('tema-escuro');
});

// Troca automática de imagens de golfinhos
const imagensGolfinhos = [
    'golfinho1.jpg',
    'golfinho2.jpg',
    'golfinho3.jpg'
];

let imagemAtual = 0;

function trocarImagem() {
    imagemAtual = (imagemAtual + 1) % imagensGolfinhos.length;
    const imgElement = document.getElementById('imagem-golfinho');
    imgElement.src = imagensGolfinhos[imagemAtual];
}

// Muda a imagem de golfinho a cada 5 segundos
setInterval(trocarImagem, 5000);
