const canvas = document.querySelector("canvas")
const pincel = canvas.getContext("2d")
const estradaImg = new Image()

function fundo() {
    estradaImg.src = "./imagens/estrada.png"
    pincel.drawImage(estradaImg, 0, 0, 500, 400)
}

function incluiPontos() {
    pincel.font = "30px Arial"
    pincel.fillStyle = "#66ff00"
    pincel.fillText(meusPontos, 500 / 5, 28)

    pincel.fillStyle = "#ff0800"
    pincel.fillText(carroPontos, 370, 28)
}

function atualizaTela() {
    fundo()
    mostraAtor()
    mostraCarro()
    movimentaCarro()
    verificarColisao()
    incluiPontos()
}

setInterval(atualizaTela, 10)