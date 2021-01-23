//variaveis
var gerar_imagens_H, gerar_imagens_W
var contador_nivel1 = -1
var timer_vitoria

window.onload = function () {
    carrega_elementos()
}

function carrega_elementos() {
    for (counter = 1; counter <=1; counter++){
        document.getElementById("main").innerHTML += "<img id='madeira_" + counter + "'src = 'css/imgs/comida.png'>"
    }

    document.getElementById("main").innerHTML += "<img id='jogador' src='css/imgs/larva.png'>"

    contador()

    window.onkeydown = processa_tecla;

    document.getElementById("jogar_btn").onclick = function () {
        jogar()
    }
}

function jogar() {
    document.getElementById("div_ajuda").style.display = "none"
    document.getElementById("div_vitoria").style.display = "none"

    for (counter = 1; counter <=1; counter++) {
        gerar_imagens_H = parseInt(Math.random() * (550 - 300 + 1) + 300)
        gerar_imagens_W = parseInt(Math.random() * (800 - 400 + 1) + 400)
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

            document.getElementById("jogador").src = "css/imgs/larva_direita.png"
            break;
        case "a":
            document.getElementById("jogador").style.left = parseInt(document.getElementById("jogador").style.left) - 10 + "px"
            document.getElementById("jogador").src = "css/imgs/larva.png"
            break;
        default:
            inicio_jogo()
    }
    detecta_colisao_larva()
}

function contador() {
    contador_nivel1++
    document.getElementById("tempo_txt").value = "x " + contador_nivel1
}

function detecta_colisao_larva() {
    var jogador = document.getElementById("jogador")
    var alturaMadeira = 37
    var larguraMadeira = 72

    var isLeft = jogador.src.indexOf("esquerda") !== -1;

    var jogadorY = parseInt(jogador.style.top) + 30;
    var jogadorX;

    if (isLeft) {
        jogadorY = parseInt(jogador.style.left);
    } else {
        jogadorX = parseInt(jogador.style.left) + 89; // 91 é a largura do jogador
    }

    for (counter = 1; counter <=1; counter++) {
        var madeira = document.getElementById("madeira_" + counter);

        var limiteEsquerdo = parseInt(madeira.style.left);
        var limiteDireito = limiteEsquerdo + larguraMadeira;
        var limiteTopo = parseInt(madeira.style.top);
        var limiteFundo = limiteTopo + alturaMadeira;

        if (jogadorX >= limiteEsquerdo && jogadorX <= limiteDireito && jogadorY >= limiteTopo && jogadorY <= limiteFundo) {
            madeira.remove()
            var som_comer = new Audio("css/sons/comer.wav")
            som_comer.play()
            document.getElementById("main").innerHTML += "<img id='madeira_" + counter + "'src = 'css/imgs/comida.png'>"
            gerar_imagens_H = parseInt(Math.random() * (550 - 300 + 1) + 300)
            gerar_imagens_W = parseInt(Math.random() * (800 - 400 + 1) + 400)
            document.getElementById("madeira_" + counter).style.left = gerar_imagens_W + "px"
            document.getElementById("madeira_" + counter).style.top = gerar_imagens_H + "px"
            contador()
            console.log("está a colidir com a madeira", madeira);
        }
    }

    if (contador_nivel1 >= 4){
        document.getElementById("jogador").src = "css/imgs/jovem.png"
    }

    if (contador_nivel1 >= 10){
        document.getElementById("jogador").src = "css/imgs/adulto.png"
        madeira.remove()
        timer_vitoria = setTimeout(function () {
           fim_jogo()
            document.getElementById("icone_contador").style.display = "none"
            document.getElementById("tempo_txt").style.display = "none"
        },500)
    }
}

function inicio_jogo() {
    document.getElementById("div_ajuda").style.display = "block"
}

function fim_jogo() {
    document.getElementById("div_vitoria").style.display = "block"
}