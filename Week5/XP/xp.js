// // Exercise 1

// const people = ["Greg", "Mary", "Devon", "James"];

// people.push("Daniel")

// for (let i = people.length - 1; i >= 0; i--) 
// {
//     if (people[i] == 'Greg')
//     {
//         people.splice(i, 1)
//         i --
//     }

//     if (people[i] == "James")
//     {
//         people[i] = "Jason"
//     }

//     if (people[i] == "Mary")
//     {
//         console.log(i)
//     }
//     console.log(people[i])

//     if (people[i] == "Mary")
//     {
//         console.log(i)
//     }
// }
// console.log(people.length)
// console.log("peopleCopy")

// let peopleCopy = people.slice(1, 3)

// for (let i = 0; i <= peopleCopy.length; i ++)
// {
//     console.log(peopleCopy[i])
//     console.log(i)
// }

// // console.log(people.indexOf('Foo')) -1 means just that this element is not exist in array
// Exercise 2

// colors = ['Black', 'White', 'Green', 'Brown', 'Gray']
// suffixes = ['st', 'nd', 'rd', 'th', 'th', 'th']

// for (i = 0; i <= colors.length; i++)
// {
//     console.log(`My ${i+1}${suffixes[i]} choice is ${colors[i]}`)
// }

// // Exercise 3
// let userNumber = 0
// while (userNumber < 10)
// {
//     let userInput = prompt("Please enter a number:");
//     if (!isNaN(parseInt(userInput))) 
//     { 
//         userNumber = userInput;
//     }
// }

// // Exercise 4
// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }

// console.log(building['numberOfFloors'])
// console.log(building['numberOfAptByFloor']['firstFloor'], building['numberOfAptByFloor']['thirdFloor'])
// console.log(building['nameOfTenants'][1], building['numberOfRoomsAndRent']['dan'])

// let sarahRent = building['numberOfRoomsAndRent']['sarah'][1]
// let davidRent = building['numberOfRoomsAndRent']['david'][1]
// let danRent = building['numberOfRoomsAndRent']['dan'][1]

// if ((sarahRent + davidRent) > danRent)
// {
//     danRent = 1200
// }

// console.log(sarahRent)
// console.log(davidRent)
// console.log(danRent)

// //Exercise 5

// let family = 
// {
//     dad : 'dead',
//     mom : 'none',
//     doughter : 'under the water'
// }

// for (let key in family) 
// {
//     console.log(key + ': ' + family[key]);
// }

// //Exercise 6

// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
// }
// let sentence = ''

// for (let key in details) 
// {
//     sentence += `${key} ${details[key]} `
// }

// console.log(sentence)

// //Exercise 7
// let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// let secretName = ''
// names.sort();

// for (i = 0; i < names.length; i++)
// {
//     secretName += names[i][0]
// }

// console.log(secretName)