
$(document).ready(function () {
    $('.btn-menu button').click(function (){
        $('.menu').slideToggle();
    })

    $('.btn-container button').click(function (){
        $('.mais-itens').slideToggle();
    })

    $('.btn-container button').text(function(i, text) {
    return text === 'ver mais' ? 'ver menos' : 'ver mais';
    });

    // Abrir o modal quando qualquer botão "comprar" for clicado
    $('.openModalLink').click(function(event) {
        event.preventDefault(); // Evita que o link redirecione para outra página
        $('#myModal').css('display', 'block').hide().fadeIn();

        // Esconder o modal após 3 segundos com efeito de fade-out
        setTimeout(function() {
        $('#myModal').fadeOut();
        }, 3000); // Alterado para 3000 milissegundos (3 segundos)
    });

    // Fechar o modal quando clicar no botão de fechar (x)
    $('.close').click(function() {
        $('#myModal').fadeOut();
    });
});