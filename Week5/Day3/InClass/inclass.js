let divs = document.getElementsByTagName('div')
let usersText = divs[0].textContent

let ulElement = document.getElementsByTagName('ul')[0]
let liElements = ulElement.getElementsByTagName('li')

let johnText1 = liElements[0].textContent
let peteText1 = liElements[1].textContent

console.log(usersText)
console.log(johnText1) 
console.log(peteText1)

let usersText2 = document.querySelector('div').textContent
let johnText2 = document.querySelector('ul li:first-child').textContent
let peteText2 = document.querySelector('ul li:last-child').textContent

console.log(usersText2)
console.log(johnText2)
console.log(peteText2)

