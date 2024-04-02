// Exercise 1 : Dog Age To Human Years
// const data = [
//     {
//       name: 'Butters',
//       age: 3,
//       type: 'dog'
//     },
//      {
//       name: 'Cuty',
//       age: 5,
//       type: 'rabbit'
//     },
//     {
//       name: 'Lizzy',
//       age: 6,
//       type: 'dog'
//     },
//     {
//       name: 'Red',
//       age: 1,
//       type: 'cat'
//     },
//     {
//       name: 'Joey',
//       age: 3,
//       type: 'dog'
//     },
//     {
//       name: 'Rex',
//       age: 10,
//       type: 'dog'
//     },
//   ];

//   let sum = 0
//   for(item of data){
//     const coef = 7
//     sum += item.age * coef
//   }
//   console.log(sum);

//   let sum2 = data.reduce((total, item) => total + item.age * 7, 0);
//   console.log(sum2);
// // Exercise 2 : Email
// const userEmail3 = ' cannotfillemailformcorrectly@gmail.com '
// const result = userEmail3.trim()
// console.log(userEmail3);
// console.log(result);

// // Exercise 3 : Employees #3
// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// const newUsers = users.map(item => ({
//     [`${item.firstName} ${item.lastName}`]: item.role
// }));

// console.log(newUsers);

// // Exercise 4 : Array To Object

// const letters = ['x', 'y', 'z', 'z'];

// const obj = {}

// letters.forEach(element => {
//     if(element in  obj){
//         obj[element]++
//     } else {
//         obj[element] = 1
//     }
// });

// const obj2 = letters.reduce((res, element) => {
//     if (element in res) {
//         res[element]++;
//     } else {
//         res[element] = 1;
//     }
//     return res;
// }, {});

// console.log(obj);
// console.log(obj2);

// // Exercise 2 : Chop Into Chunks
// let message = 'institute'

// console.log(chop(message,3));

// function chop(str, num) {
//     [...chars] = str
//     const groupedArray = chars.reduce((acc, current, index) => {
//         if (index % num === 0) {
//             acc.push(chars.slice(index, index + num).join(''));
//         }
//         return acc;
//     }, []);
//     return groupedArray
// }

//Exercise 4
function reverseArray(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        const temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

console.log(reverseArray([1,3,4,2]));