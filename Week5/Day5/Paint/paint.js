let body = document.getElementsByTagName('body')[0]
let container = document.getElementById('container')
let pallette = document.getElementById('pallette')
let board = document.getElementById('board')
let colors = document.getElementById('colors')
let clearBtn = document.getElementById('clear_btn')

let selectedColor
let boardSize = 50
let isMouseDown = false

const colorCodes = [
    "#FFFFFF", // White
    "#000000", // Black
    "#FF0000", // Red
    "#008000", // Green
    "#0000FF", // Blue
    "#FFFF00", // Yellow
    "#FFC0CB", // Pink
    "#800080", // Purple
    "#FFA500", // Orange
    "#00FFFF", // Cyan
    "#FF00FF", // Magenta
    "#00FF00", // Lime
    "#808080", // Gray
    "#C0C0C0", // Silver
    "#800000", // Maroon
    "#808000", // Olive
    "#000080", // Navy
    "#008080", // Teal
    "#00FFFF", // Aqua
    "#FF00FF"  // Fuchsia
]

body.style.margin = '0px auto'
body.style.padding = '0px auto'

container.style.backgroundColor = 'gray'
container.style.display = 'flex'
container.style.width = '100vw'
container.style.height = '100vh'

pallette.style.backgroundColor = 'white'
pallette.style.width = '30%'
pallette.style.height = '500px'
pallette.style.border = '2px solid black'
pallette.style.border = '2px solid black'
pallette.style.margin = '5px'

pallette.style.display = 'flex'
pallette.style.alignItems = 'center'
pallette.style.flexDirection = 'column'

clearBtn.style.height = '25px'
clearBtn.style.width = '40%'
clearBtn.style.margin = '5px'
clearBtn.addEventListener('click', function() {
    let boardChildren = board.children
    for (let i = 0; i < boardChildren.length; i++) {
        let child = boardChildren[i]
        child.style.backgroundColor = 'white'
    }
})

colors.style.width = '100%'
colors.style.height = '100%'
colors.style.display = 'flex'
colors.style.justifyContent = 'center'
colors.style.flexWrap = 'wrap'

board.style.backgroundColor = 'white'
board.style.width = '70%'
board.style.height = '500px'
board.style.border = '2px solid black'
board.style.margin = '5px'

board.style.display = 'grid'

board.addEventListener('mousedown', mouseDownHandler)
board.addEventListener('mousemove', mouseMoveHandler)
board.addEventListener('mouseup', mouseUpHandler)

createPallette(colorCodes)
createBoard(boardSize)

function createPallette(list) {
    for(color of list){
        let colorDiv = document.createElement('div')
        colorDiv.style.backgroundColor = color
        colorDiv.style.height = '10%'
        colorDiv.style.width = '30%'
        colorDiv.style.border = '1px solid black'
        colorDiv.style.margin = '2px'
        colorDiv.addEventListener('click', function() {
            chooseColor(colorDiv.style.backgroundColor)
        });
        colors.appendChild(colorDiv)
    }
    return colors
}

function createBoard(cubeSize) {
    board.style.gridTemplateColumns = `repeat(${cubeSize * 2},1fr)`
    board.style.gridTemplateRows = `repeat(${cubeSize},1fr)`
    board.style.gap = '0px'

    for (let i = 0; i < cubeSize * 2 * cubeSize; i++) {
        let cellDiv = document.createElement('div')
        cellDiv.style.backgroundColor = 'white'
        cellDiv.style.border = '1px solid black'
        board.appendChild(cellDiv)
    }
    return board
}

function chooseColor(color) {
    selectedColor = color
}

function mouseDownHandler() {
    isMouseDown = true
}

function mouseMoveHandler(event) {
    if (isMouseDown) {
        let currentCell = event.target
        currentCell.style.backgroundColor = selectedColor
    }
}

function mouseUpHandler() {
    isMouseDown = false
}