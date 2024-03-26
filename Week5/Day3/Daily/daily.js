let solarSystem = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
let body = document.getElementsByTagName('body')[0]
let listPlanet = document.getElementsByClassName('listPlanets')[0]

for (let planet of solarSystem){
    let newDiv = document.createElement('div')
    let newTitle = document.createElement('p')
    newTitle.textContent = planet
    newTitle.style.color = 'white'
    newTitle.style.padding = '25px'
    newDiv.setAttribute('class', 'planet')
    newDiv.style.margin = '25px'
    newDiv.appendChild(newTitle)
    listPlanet.appendChild(newDiv)
}