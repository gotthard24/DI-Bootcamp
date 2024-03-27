// // Exercise 1 : Change The Article
// let title = document.getElementById('title')
// let subtitle = document.getElementById('subtitle')
// let subSubtitle = document.getElementById('subsubtitle')
// let article = document.getElementsByTagName('article')[0]
// let lastP =  article.lastElementChild
// let pList = document.getElementsByTagName('p')
// let button = document.getElementById('btn')
// let fader = document.getElementById('fading')

// console.log(title.textContent);
// console.log(lastP.textContent);
// lastP.remove()

// console.log(subtitle.textContent);
// subtitle.addEventListener('click', changeColor)
// subSubtitle.addEventListener('click', hide)
// button.addEventListener('click', pToBold)

// title.addEventListener("mouseover", randSize)
// fader.addEventListener('click', fade)

// function changeColor() {
//     this.style.backgroundColor = 'red'
// }

// function hide() {
//     this.style.display = 'none'
// }

// function pToBold() {
//     for(let p of pList)
//         p.style.fontWeight = "bold"
// }

// function randSize() {
//     randomSize = Math.floor(Math.random() * 100)
//     this.style.fontSize = `${randomSize}px`
// }

// function fade() {
//     this.style.opacity = '0';
// }

// // Exercise 2 : Work With Forms

// let form = document.getElementsByTagName('form')[0]
// // let fnameInput = document.getElementById('fname')
// // let lnameInput = document.getElementById('lname')
// let fnameInput = document.querySelector('input[name="firstname"]')
// let lnameInput = document.querySelector('input[name="lastname"]')

// console.log(form)
// console.log(fnameInput)
// console.log(lnameInput)

// form.addEventListener('submit', function(event) {
//     event.preventDefault()
//     addLi()
//     fnameInput.value = ""
//     lnameInput.value = ""
// })

// function addLi() {
//     let firstName = fnameInput.value
//     let lastName = lnameInput.value
//     let answers = document.getElementsByClassName('usersAnswer')[0]
//     let newLi1 = document.createElement('li')
//     let newLi2 = document.createElement('li')

//     // newLi.textContent = `${firstName} ${lastName}`
//     newLi1.textContent = firstName
//     newLi2.textContent = lastName

//     answers.appendChild(newLi1)
//     answers.appendChild(newLi2)
// }

// // Exercise 3 : Transform The Sentence
// let allBoldItems = getBoldItems()

// for (let item of allBoldItems) {
//     item.addEventListener('mouseover', function() {
//         highlight(item);
//     })
//     item.addEventListener('mouseout', function() {
//         returnItemsToDefault(item);
//     })
// }

// highlight(allBoldItems)
// returnItemsToDefault(allBoldItems)

// function getBoldItems() {
//     return document.getElementsByTagName('strong')
// }

// function highlight(items) {
//     for(let item of items)
//         item.style.color = 'blue'
// }
// function highlight(item) {
//     item.style.color = 'blue'
// }

// function returnItemsToDefault(items) {
//     defaultColor = 'black'
//     for(let item of items)
//         item.style.color = defaultColor
// }
// function returnItemsToDefault(item) {
//     defaultColor = 'black'
//     item.style.color = defaultColor
// }
// // Exercice 4 : Volume Of A Sphere

// let radiusInput = document.getElementById('radius')
// let form = document.getElementById('MyForm')
// let volume = document.getElementById('volume')
// const pi = Math.PI

// form.addEventListener('submit', calcVol)

// function calcVol(event) {
//     event.preventDefault()
//     let radius = parseFloat(radiusInput.value)
//     let result = (4 * pi * Math.pow(radius, 3)) / 3
//     volume.value = result.toFixed(2)
// }

