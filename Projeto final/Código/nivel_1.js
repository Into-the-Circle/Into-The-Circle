var gerar_imagens_H, gerar_imagens_W
var contador_jogo = -1

window.onload = function () {
    carrega_elementos()
}

function carrega_elementos() {
    document.getElementById("ecraJogo").innerHTML += "<img id = 'jogador' src = 'imagens/larva.png'>"
    document.getElementById("jogador").style.top = (window.innerHeight - 50) / 2 + "px"
    document.getElementById("jogador").style.left = (window.innerWidth - 50) / 2 + "px"

    for (var counter = 1; counter <= 10; counter++) {
        document.getElementById("ecraJogo").innerHTML += "<img id='madeira_morta_" + counter + "'src = 'imagens/madeira_morta.png'>"
    }

    contador()
    window.onkeydown = processa_tecla
}

function jogar() {
    for (var counter = 1; counter <= 10; counter++) {
        gerar_imagens_H = parseInt(Math.random() * (window.innerHeight))
        gerar_imagens_W = parseInt(Math.random() * (window.innerWidth))
        document.getElementById("madeira_morta_" + counter).style.left = gerar_imagens_W + "px"
        document.getElementById("madeira_morta_" + counter).style.top = gerar_imagens_H + "px"
    }
}

function move_objecto() {
    console.log("tecla pressionada", event.key)
    switch (event.key) {
        case "w":
            document.getElementById("jogador").style.top = parseInt(document.getElementById("jogador").style.top) - 10 + "px"
            break;
        case "s":
            document.getElementById("jogador").style.top = parseInt(document.getElementById("jogador").style.top) + 10 + "px"
            break;
        case  "a":
            document.getElementById("jogador").style.left = parseInt(document.getElementById("jogador").style.left) + 10 + "px"
            break;
        case "d":
            document.getElementById("jogador").style.left = parseInt(document.getElementById("jogador").style.left) - 10 + "px"
            break;
    }
}

function processa_tecla() {
    window.onkeydown = function () {
        processa_tecla()
    }
    move_objecto()
}

function contador() {
    contador_jogo++
    document.getElementById("contador_madeiras").value = "x" + contador_jogo
}

function 
