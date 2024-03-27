let container = document.getElementById('container')
let clearBtn = document.getElementById('clear')

// setTimeout(function() {
//     alert('Hello World')
// }, 2000);

// setTimeout(function() {
//     let newP = document.createElement('p')
//     newP.textContent = 'Hello World'
//     container.appendChild(newP)
// }, 2000);

let repeater = setInterval(addHello, 2000)

clearBtn.addEventListener('click', function() {
    clearInterval(repeater);
})

function addHello() {
    let newP = document.createElement('p')
    newP.textContent = 'Hello World'
    container.appendChild(newP)

    if (container.getElementsByTagName('p').length === 5) {
        clearInterval(repeater);
    }
}