window.addEventListener('load', function() {

    const body = document.querySelector('body');

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

document.addEventListener("DOMContentLoaded", function() {

    let modal = document.getElementById("imageModal");
    let modalImage = document.getElementById("modalImage");
    let images = document.querySelectorAll(".gallery-img");
    let currentIndex = 0;
    let navbar = document.getElementById('main-nav');

    images.forEach((img, index) => {
        img.addEventListener("click", () => {
            navbar.classList.add('hidden');            
            modal.style.display = "block";
            modalImage.src = img.src;
            currentIndex = index; 
        });
    });

    let closeButton = document.querySelector(".close");
    if (closeButton) {
        closeButton.onclick = function() {
            navbar.classList.remove('hidden');
            modal.style.display = "none";
        };
    } else {
        console.error("Elemento '.close' não encontrado!");
    }

    function changeImage(direction) {
        currentIndex += direction;
        
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        } else if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        modalImage.src = images[currentIndex].src;
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            navbar.classList.remove('hidden');
            modal.style.display = "none";
        }
    };
});