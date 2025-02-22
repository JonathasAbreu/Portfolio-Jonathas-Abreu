window.addEventListener('load', function() {
    // Seleciona o body (ou outros elementos, se desejar)
    const body = document.querySelector('body');

    // Adiciona a classe 'ativo' após o carregamento da página
    body.classList.add('ativo');
});

$("#year").text(new Date().getFullYear());

$("body").scrollspy({ target: "#main-nav" });
$("#main-nav a").on("click", function (event) {
    if (this.hash !== "") {
        event.preventDefault();
        const hash = this.hash;

        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top,
            },
            900,
            function () {
                window.location.hash = hash;
            }
        );
    }
});
document.querySelectorAll('.botaoMouse').forEach(function (botao) {
    botao.addEventListener('click', function (event) {
        event.preventDefault();
        const targetID = botao.getAttribute('href');
        const targetElement = document.querySelector(targetID);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth',
            });
        }
    });
});



// Variáveis globais
let modal = document.getElementById("imageModal");
let modalImage = document.getElementById("modalImage");
let images = document.querySelectorAll(".gallery-img");
let currentIndex = 0;
let navbar = document.getElementById('main-nav');  // Seleciona a navbar

// Função para abrir o modal e exibir a imagem clicada
images.forEach((img, index) => {
    img.addEventListener("click", () => {
        // Esconde a navbar ao abrir o modal
        navbar.classList.add('hidden');  // Aplica a classe para esconder a navbar
        
        modal.style.display = "block";
        modalImage.src = img.src;
        currentIndex = index;  // Atualiza o índice da imagem clicada
    });
});

// Função para fechar o modal ao clicar no "X"
document.querySelector(".close").onclick = function() {
    // Mostra a navbar novamente ao fechar o modal
    navbar.classList.remove('hidden');  // Remove a classe para mostrar a navbar
    
    modal.style.display = "none";
};

// Função para navegar entre as imagens
function changeImage(direction) {
    currentIndex += direction;
    
    // Garantir que o índice seja circular (loop infinito)
    if (currentIndex < 0) {
        currentIndex = images.length - 1;  // Vai para a última imagem
    } else if (currentIndex >= images.length) {
        currentIndex = 0;  // Vai para a primeira imagem
    }

    modalImage.src = images[currentIndex].src;  // Atualiza a imagem no modal
}

// Fechar o modal clicando fora da imagem (ou no fundo escuro)
window.onclick = function(event) {
    if (event.target === modal) {
        // Mostra a navbar novamente
        navbar.classList.remove('hidden');  // Remove a classe para mostrar a navbar
        modal.style.display = "none";
    }}
    