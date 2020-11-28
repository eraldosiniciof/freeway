function sound(caminho) {
    this.sound = document.createElement("audio")
    this.sound.src = caminho
    this.sound.setAttribute("preload", "auto")
    this.sound.setAttribute("controls", "none")
    this.sound.style.display = "none"
    document.body.appendChild(this.sound)
    this.play = function () {
        this.sound.play()
    }
    this.stop = function () {
        this.sound.pause()
    }
}

const somColidiu = new sound("./sons/colidiu.mp3")
const somPontos = new sound("./sons/pontos.wav")
const trilha = new sound("./sons/trilha.mp3")

