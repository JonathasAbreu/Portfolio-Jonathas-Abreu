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



// Selecionando os elementos do modal
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const images = document.querySelectorAll(".gallery-img");
const closeButton = document.querySelector(".close");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentIndex = 0;

// Função para abrir o modal e exibir a imagem clicada
images.forEach((img, index) => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImage.src = img.src;
        currentIndex = index;
    });
});

// Função para fechar o modal ao clicar no botão de fechar
closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// Função para navegar entre as imagens
function changeImage(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = images.length - 1; // Vai para a última imagem
    } else if (currentIndex >= images.length) {
        currentIndex = 0; // Volta para a primeira imagem
    }

    modalImage.src = images[currentIndex].src;
}

// Eventos de clique para os botões de navegação
prevButton.addEventListener("click", () => changeImage(-1));
nextButton.addEventListener("click", () => changeImage(1));

// Fechar modal ao clicar fora da imagem
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
    