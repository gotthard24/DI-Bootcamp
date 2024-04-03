const body = document.getElementsByTagName('body')[0]
const form = document.getElementById('form')

form.addEventListener('submit', displayUser)

function displayUser(event) {
    event.preventDefault()

    let div = document.createElement('div')
    let name = form.querySelector('input[name="name"]').value;
    let lastname = form.querySelector('input[name="lastname"]').value;

    let obj = {name, lastname}

    div.textContent = JSON.stringify(obj)
    body.appendChild(div)
}