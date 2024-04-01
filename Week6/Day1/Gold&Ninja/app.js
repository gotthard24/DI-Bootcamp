// // Exercise 1 : Nested Functions
// let landscape = function() {

//     let result = "";
   
//     let flat = function(x) {
//       for(let count = 0; count<x; count++){
//         result = result + "_";
//       }
//     }
   
//     let mountain = function(x) {
//       result = result + "/"
//       for(let counter = 0; counter<x; counter++){
//         result = result + "'"
//       }
//       result = result + "\\"
//     }
   
//     flat(4);
//     mountain(4);
//     flat(4)
   
//     return result;
// }
   

// console.log(landscape());

// let land = () => {
//     let result = "";

//     let flat = (x) => {
//         for (let count = 0; count < x; count++) {
//             result = result + "_";
//         }
//     };

//     let mountain = (x) => {
//         result = result + "/";
//         for (let counter = 0; counter < x; counter++) {
//             result = result + "'";
//         }
//         result = result + "\\";
//     };

//     flat(4);
//     mountain(4);
//     flat(4);

//     return result;
// };

// console.log(land());

// // Exercise 2 : Closure
// const addTo = x => y => x + y;
// const addToTen = addTo(10);
// addToTen(3);
// console.log(addToTen(3));

// Exercise 3 : Currying
// const curriedSum = (a) => (b) => a + b
// curriedSum(30)(1)
// console.log(curriedSum(30)(1));

// const curriedSum = (a) => (b) => a + b
// const add5 = curriedSum(5)
// add5(12)
// console.log(add5(12));

// // Exercise 5 : Composing
// const compose = (f, g) => (a) => f(g(a));
// const add1 = (num) => num + 1;
// const add5 = (num) => num + 5;
// console.log(compose(add1, add5)(10))

// const mergeWords = (string) => (nextString) => {
//     if (nextString === undefined) {
//         return string;
//     } else {
//         return mergeWords(string + ' ' + nextString);
//     }
// };

const mergeWords = (string) => (nextString) => nextString === undefined ? string : mergeWords(string + ' ' + nextString);

console.log(mergeWords('There')('is')('no')('spoon')('anymore')());