// // Exercise 1 : Find The Numbers Divisible By 23
// console.log(displayNumbersDivisible(23))

// function displayNumbersDivisible(devisor) 
// {
//     let sum = 0
//     for (let i = 0; i <= 500; i++) 
//     {
//         if(i % devisor == 0)
//         {
//             console.log(i)
//             sum += i
//         }
//     }
//     return sum
// }

// // Exercise 2 : Shopping List

// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// let shoppingList = ['banana', 'orange', 'apple']

// function myBill() {
//     let bill = 0
//     for (item of shoppingList) {
//         if(item in stock && stock[item] > 0)
//         {
//             bill += prices[item]
//             if (stock[item] > 0) {
//                 stock[item]--
//             }
//         }
//     }
//     return bill
// }

// console.log(myBill())
// console.log(stock);

// // Exercise 3 : What’s In My Wallet ?

// function changeEnough(itemPrice, amountOfChange){
//     const quarter = 0.25
//     const dimes = 0.1
//     const nickel = 0.05
//     const penny = 0.01
    
//     if (itemPrice > (amountOfChange[0] * quarter + 
//                      amountOfChange[1] * dimes + 
//                      amountOfChange[2] * nickel + 
//                      amountOfChange[3] * penny))
//         return true
//     else
//         return false
// }

// console.log(changeEnough(14.11, [2,100,0,0]))
// console.log(changeEnough(0.75, [0,0,20,5]))

// // Exercise 4 : Vacations Costs

// function hotelCost(daysAmount){
//     let dayCost = 140
//     let cost = dayCost * daysAmount
//     return cost
// }

// function planeRideCost(city){
//     let cost
//     switch (city) {
//         case 'London':
//             cost = 183
//             break;
//         case 'Paris':
//             cost = 220
//             break;   
//         default:
//             cost = 300
//             break;
//     }
//     return cost
// }

// function rentalCarCost(daysAmount){
//     let dayCost = 40
//     let cost = dayCost * daysAmount

//     if (daysAmount > 10)
//         cost *= 0.95
//     return cost
// }

// function totalVacationCost(){
//     let numberOfNights 
//     let destination
//     let numberOfRentDays

//     do{
//         numberOfNights = prompt("Enter number of nights to stay")
//     }
//     while (isNaN(parseInt(numberOfNights)))

//     do{
//         destination = prompt("Enter your destination city")
//     }
//     while (!isNaN(parseInt(destination)))

//     do{
//         numberOfRentDays = prompt("Enter for how much days you want to rent a car")
//     }
//     while (isNaN(parseInt(numberOfRentDays)))
    
//     console.log(`The car cost: ${rentalCarCost(numberOfRentDays)}, the hotel cost: ${hotelCost(numberOfNights)}, the plane tickets cost: ${planeRideCost(destination)} `)
// }

// totalVacationCost()

// // Exercise 5 : Users

// let body = document.getElementsByTagName('body')[0]
// let container = document.getElementById("container")
// let lists = document.getElementsByClassName('list')
// let listFirst = document.getElementsByClassName('list')[0]
// let li1 = listFirst.children[0]
// let li2 = listFirst.children[1]
// let listSecond = document.getElementsByClassName('list')[1]
// let li3 = listSecond.children[0]
// let li4 = listSecond.children[1]
// let li5 = listSecond.children[2]

// console.log(container.textContent);

// li2.textContent = "Richard"
// console.log(li2);

// listSecond.removeChild(li4)

// for(let list of lists){
//     list.children[0].textContent = 'Daniel'
//     list.classList.add('student_list');
// }

// listFirst.classList.add('university', 'attendance')

// container.style.backgroundColor = 'lightblue'
// container.style.padding = '20px'
// li5.style.display = 'none'
// li2.style.border = '1px solid black'
// body.style.fontSize = '24px'

// // Exercise 6 : Change The Navbar

// let div = document.getElementById('navBar');
// let newLi = document.createElement('li')
// let myList = document.querySelector('ul')

// div.setAttribute('id', 'socialNetworkNavigation')
// newLi.textContent = 'Logout'
// myList.appendChild(newLi)

// console.log(myList.firstElementChild.textContent)
// console.log(myList.lastElementChild.textContent)

// // Exercise 7 : My Book List
// let listBooks = document.createElement('section')
// let body = document.getElementsByTagName('body')[0]

// let lotr ={
//     title : 'Lord of The Rings: The Fellowship of the Ring',
//     author : 'J.R.R. Tolkien',
//     image : 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg',
//     alreadyRead : true
// }
// let the1984 ={
//     title : '1984',
//     author : 'George Orwell',
//     image : 'https://m.media-amazon.com/images/I/612ADI+BVlL._AC_UF1000,1000_QL80_.jpg',
//     alreadyRead : true
// }

// let allBooks = [lotr,the1984]
// listBooks.setAttribute('class', 'listBooks')
// body.appendChild(listBooks)

// for (let book of allBooks){
//     let newDiv = document.createElement('div')
//     listBooks.appendChild(newDiv)
//     //title and author part
//     for(let key in book){
//         if (key === 'image')
//             break
//         let newP = document.createElement('p')
//         newP.textContent = `${key} : ${book[key]}`
//         newDiv.appendChild(newP)
//         console.log(key + ': ' + book[key])
//     }
//     //image part
//     let image = document.createElement('img')
//     image.src = book['image']
//     image.style.width = '100px'
//     newDiv.appendChild(image)
//     //isRead part
//     if (book['alreadyRead'] === true)
//         newDiv.style.color = 'red'
// }