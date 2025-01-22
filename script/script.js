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