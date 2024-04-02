// // Exercise 1 : Analyzing The Map Method
// [1, 2, 3].map(num => {
//     if (typeof num === 'number') return num * 2;
//     return ;
//   });

// // Exercise 2: Analyzing The Reduce Method
// console.log([[0, 1], [2, 3]].reduce(
//     (acc, cur) => {
//       return acc.concat(cur);
//     },
//     [1, 2],
//   ));

// // Exercise 3 : Analyze This Code
// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//     console.log(num, i);
//     alert(num);
//     return num * 2;
// })

// // Exercise 4 : Nested Arrays
// const array = [[1],[2],[3],[[[4]]],[[[5]]]]
// let newArr = array.reduce((total, item) => total.concat(item))

// console.log(newArr);

// const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];

// let newGreet = greeting.reduce((total, item) => total.concat(item))

// console.log(newGreet);
// let message = newGreet.join(' ')
// console.log(message);

// const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]]

// let free3 = flattenArray(trapped)
// // let free3 = trapped.flat(Infinity)
// console.log(free3);

// function flattenArray(arr) {
//     return arr.flatMap(item => Array.isArray(item) ? flattenArray(item) : item);
//   }

// // Exercise 1: Sum Elements
// let arr = [1,2,3,4]

// function findSum(arr) {
//     let sum = arr.reduce((total, item) => total + item)
//     return sum
// }

// // Exercise 2 : Remove Duplicates

// let arr = [1,1,2,2,1,2]

// removeDuplicates(arr)

// function removeDuplicates(arr) {
//     let newArr = []
//     let tempArr = [...arr].sort()
//     for(let item of tempArr){
//         if (newArr.some(val => val === item)) continue
//         newArr.push(item)
//     }
//     console.log(newArr);
//     return newArr
// }

// // Exercise 3 : Remove Certain Values
// let arr = [NaN, 0, 15, false, -22, '',undefined, 47, null]

// removeBlanks(arr)

// function removeBlanks(array) {
//     let targets = [NaN, 0, false, '', undefined, null]
//     let newArr = []

//     for(item of array){
//         if (targets.includes(item)) continue
//         newArr.push(item)
//     }
//     console.log(newArr);
//     return newArr
// }
// // Exercise 4 : Repeat Please !
// let smth = 'Ha!';

// let repeated = repeatPls(smth, 3);
// console.log(repeated);

// function repeatPls(string, number) {
//     let repeated = ''
//     for (let i = 0; i < number; i++) {
//         repeated += string
//     }
//     return repeated
// }

// // Exercise 5 : Turtle & Rabbit
// const startLine = '     ||<- Start line';
// let turtle = '       🐢';
// let rabbit = '       🐇';

// turtle = turtle.trim().padEnd(9, '=');

// console.log(startLine);
// console.log(turtle);
// console.log(rabbit);