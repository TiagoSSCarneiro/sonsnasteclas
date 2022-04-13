
function playSound(e) {
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`) //busca o elemento audio do html
    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return // para de executar a funcao todos juntos
    audio.currentTime = 0 //faz com que volte ao incio(reinicia tecla)
    audio.play()

    //console.log(key)
    key.classList.add('playing')
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return

    this.classList.remove('playing')
}


const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound)