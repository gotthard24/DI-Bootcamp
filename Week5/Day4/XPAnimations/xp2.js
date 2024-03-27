function myMove() {
    let animate = document.getElementById('animate')
    let intervalID = setInterval(frame, 1)
    let pos = 0

    function frame() {
        if (pos == 350) {
            clearInterval(intervalID)
        } else {
            pos++
            animate.style.left = pos + 'px'
        }
    }
}