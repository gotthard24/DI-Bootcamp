const tasks = []

let form = document.getElementById('todo_form')
let input = document.getElementById('inputTask')
let submitBtn = document.getElementById('submit_btn')
let taskList = document.getElementsByClassName('listTasks')[0]

form.addEventListener('submit', function(event) {
    event.preventDefault()

    const inputValue = input.value.trim()

    if (inputValue === '') {
        alert('Input field is empty!')
    } else {
        addTask(inputValue)
        input.value = ''
    }
})

function addTask(task) {
    let newDiv = document.createElement('div')
    let checkBox = document.createElement('input')
    let checkLabel = document.createElement('label')
    
    event.preventDefault()
    
    tasks.push(input.value)
    
    checkBox.type = 'checkbox'
    checkBox.id = 'task-' + tasks.length
    checkLabel.htmlFor = checkBox.id
    checkLabel.textContent = task 
    
    createIconX(newDiv)
    newDiv.appendChild(checkBox)
    newDiv.appendChild(checkLabel)
    
    taskList.appendChild(newDiv)
}

function createIconX(div) {
    let icon = document.createElement('i')
    icon.className = 'fa-solid fa-x'
    icon.style.color = '#000000'
    div.appendChild(icon)
}