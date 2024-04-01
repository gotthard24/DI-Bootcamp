// // Exercise 1 : Colors
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// colors.forEach((item, i) => {
//     console.log(`${i}# choice is ${item}`);
// });

// if (colors.some( value => value === "Violet")){
//     console.log("Yeah");
// } else console.log("No...");

// // Exercise 2 : Colors #2
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];

// colors.forEach((element, index) => {
//     const ending = (index + 1 <= 3) ? ordinal[index + 1] : 'th';
//     console.log(`${index + 1}${ending}: ${element}`);
// });
// Exercise 3 : Analyzing

// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);

// ------2------
// const country = "USA";
// console.log([...country]);

// ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);

// // Exercise 4 : Employees
// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// let newArr = users.map((val) => {
//     return `Hello ${val['firstName']}`
// });

// console.log(newArr);

// let filteredArr = users.filter(val => val.role === 'Full Stack Resident');

// console.log(filteredArr);

// let omgArr = users.filter(val => val.role === 'Full Stack Resident').map(val => `Hello ${val['firstName']}`)

// console.log(omgArr);

// // Exercise 5 : Star Wars
// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// const epicPhrase = epic.reduce((first, next) => first + ' ' + next);

// console.log(epicPhrase);
// Exercise 6 : Employees #2

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

let passedArr = students.filter(item => item.isPassed === true).forEach(item => console.log(`Congrats ${item.name} with passing the exams of ${item.course}`))