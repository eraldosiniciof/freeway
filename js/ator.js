const imagemAtor = new Image()
let yAtor = 366
let xAtor = 100
let meusPontos = 0

function mostraAtor() {
    imagemAtor.src = "./imagens/ator-1.png"
    pincel.drawImage(imagemAtor, xAtor, yAtor, 30, 30)
}

const velocidadeAtor = 20
document.addEventListener("keydown", function (e) {
    switch (e.keyCode) {
        case 37:
            xAtor -= velocidadeAtor
            break
        case 38:
            yAtor -= velocidadeAtor
            break
        case 39:
            xAtor += velocidadeAtor
            break
        case 40:
            yAtor += velocidadeAtor
            break

    }
    if (xAtor <= 0) {
        xAtor = 0
    }
    if (xAtor >= 470) {
        xAtor = 470
    }
    if (yAtor <= 0) {
        yAtor = 0
    }
    if (yAtor >= 370) {
        yAtor = 370
    }
})

function voltaAtor() {
    meusPontos++
    yAtor = 366
    somPontos.play()
}