//declaração de variáveis

var gerar_imagens_H, gerar_imagens_W;
var t
var contador_temporizador = 0

window.onload = function () {
    carrega_elementos();
};

function carrega_elementos() {

    for (counter = 1; counter <= 1; counter++) {
        document.getElementById("main").innerHTML += "<img id='madeira_" + counter + "'src = 'css/imgs/madeira_morta.png'>"
    }

    document.getElementById("main").innerHTML += "<img id='jogador' src='css/imgs/larva.png'>"

    countdown()

    window.onkeydown = processa_tecla;

    document.getElementById("jogar_btn").onclick = function () {
        jogar()
    }
}

function jogar() {
    document.getElementById("div_ajuda").style.display = "none"

    for (counter = 1; counter <= 1; counter++) {
        gerar_imagens_H = parseInt(Math.random() * (window.innerHeight))
        gerar_imagens_W = parseInt(Math.random() * (window.innerWidth))
        document.getElementById("madeira_" + counter).style.left = gerar_imagens_W + "px"
        document.getElementById("madeira_" + counter).style.top = gerar_imagens_H + "px"
    }
    document.getElementById("jogador").style.top = (window.innerHeight - 50) / 2 + "px"
    document.getElementById("jogador").style.left = (window.innerWidth - 50) / 2 + "px"
}

function processa_tecla() {
    console.log("tecla pressionada", event.key)
    switch (event.key) {
        case "w":
            document.getElementById("jogador").style.top = parseInt(document.getElementById("jogador").style.top) - 10 + "px"
            break;
        case "s":
            document.getElementById("jogador").style.top = parseInt(document.getElementById("jogador").style.top) + 10 + "px"
            break;
        case  "d":
            document.getElementById("jogador").style.left = parseInt(document.getElementById("jogador").style.left) + 10 + "px"
            break;
        case "a":
            document.getElementById("jogador").style.left = parseInt(document.getElementById("jogador").style.left) - 10 + "px"
            break;
        default:
            fim_jogo()
    }
    detecta_colisao();
}

function countdown() {
    contador_temporizador++
    document.getElementById("tempo_txt").value = contador_temporizador
}

function detecta_colisao() {
    var elJogador = document.getElementById("jogador");

    var alturaLamp = 44;
    var larguraLamp = 28;

    var isLeft = elJogador.src.indexOf("esquerda") !== -1;

    var playerY = parseInt(elJogador.style.top) + 60;
    var playerX;

    if (isLeft) {
        playerX = parseInt(elJogador.style.left);
    } else {
        playerX = parseInt(elJogador.style.left) + 91; // 91 é a largura do jogador
    }

    for (counter = 1; counter <= 1; counter++) {
        var lamp = document.getElementById("madeira_" + counter);

        var limiteEsquerdo = parseInt(lamp.style.left);
        var limiteDireito = limiteEsquerdo + larguraLamp;
        var limiteTopo = parseInt(lamp.style.top);
        var limiteFundo = limiteTopo + alturaLamp;

        if (playerX >= limiteEsquerdo && playerX <= limiteDireito && playerY >= limiteTopo && playerY <= limiteFundo) {
            countdown()
            console.log("está a colidir com uma lamp", lamp);
            lamp.src = ""
        }
    }
}

function fim_jogo() {
    document.getElementById("div_ajuda").style.display = "block"
}