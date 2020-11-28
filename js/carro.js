const imagemCarro1 = new Image()
const imagemCarro2 = new Image()
const imagemCarro3 = new Image()
imagemCarro1.src = "./imagens/carro-1.png"
imagemCarro2.src = "./imagens/carro-2.png"
imagemCarro3.src = "./imagens/carro-3.png"
const imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3]
let carroPontos = 0

const xCarros = [600, 700, 750, 680, 690, 720]
const yCarros = [40, 95, 150, 210, 260, 320]
const comprimentoCarro = 50
const alturaCarro = 40
const velocidades = [3, 1.5, 2.3, 3.7, 2.8, 1.8]

function mostraCarro() {
    for (let i = 0; i < imagemCarros.length; i++) {
        pincel.drawImage(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro)
    }
    trilha.play()
}

function movimentaCarro() {
    for (let i = 0; i < imagemCarros.length; i++) {
        xCarros[i] -= velocidades[i]
        if (xCarros[i] < -50) xCarros[i] = 600
    }
}

function colidiu() {
    carroPontos++
    yAtor = 366
    somColidiu.play()
}

function verificarColisao() {
    for (let i = 0; i < imagemCarros.length; i++) {
        if (yAtor <= 5) {
            voltaAtor()
        } else if (yCarros[i] >= (yAtor - 39)
            && xCarros[i] <= xAtor
            && xAtor < (xCarros[i] + 40)) {
            colidiu()
        }
    }
}