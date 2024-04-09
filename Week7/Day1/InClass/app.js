// const flip = () =>{
//     const coin = Math.floor(Math.random() * 3);
//     console.log(coin);
//     return coin === 0 ? 'head' : 'tail';
// }

// const flipCoin = new Promise((res,rej) =>{
//     setTimeout(() =>{
//         const flipResult = flip()
//         if (flipResult === 'head'){
//             res(flipResult)
//         } else {
//             rej('rejected flip')
//         }
//     }, 1000)
// })

// flipCoin.then(result =>{
//     console.log(result);
// }).catch((err) =>{
//     console.log(err);
// })


// const getX = () =>{
//     return new Promise((res,rej) =>{
//         setTimeout(()=>{
//             res(5);
//         }, 3000);
//     });
// };

// const getY = () =>{
//     return new Promise((res,rej) =>{
//         setTimeout(()=>{
//             res(6);
//         }, 2000);
//     });
// };

// const getXY = () =>{
//     getX().then(x => {
//         getY().then(y => {
//           displaySum(x, y)
//         })
//     })
// }


// const displaySum = (x, y) => {
//     console.log(x + y);
// }
// getXY();

/**
const arr = [
         { username: "aaa", email: "aaa@gmail.com" },
         { username: "bbb", email: "bbb@gmail.com" },
         { username: "ccc", email: "ccc@gmail.com" },
];

 * 1. getDataFromServer function return a Promise with data as
 * Array of objects from server 
  
 * Simulate successful completion after 2 seconds
 *
 * 2. Call this function and log the data as an Array datatype
 *
 * 3. Simulate an error
 * 
 * 4. return to step 2, and create render function that will display
the users on the page*/

// const arr = [
//     { username: "aaa", email: "aaa@gmail.com" },
//     { username: "bbb", email: "bbb@gmail.com" },
//     { username: "ccc", email: "ccc@gmail.com" },
// ];

// const getDataFromServer = (array) =>{
//     return new Promise((res,rej) =>{
//         setTimeout(()=>{
//             res(array);
//         }, 2000);
//     });
// };

// getDataFromServer(arr)
// .then(result => render(result))
// .catch((error) => console.log(error))

// function render(arr) {
//     const root = document.getElementById('root')
//     for (item of arr){
//         let newDiv = `<div>Username:  ${item.username},  Email:  ${item.email}</div>`
//         root.innerHTML += newDiv
//     }
// }

// function render(arr) {
//     const root = document.getElementById('root')
//     for (item of arr){
//         for (key in item){
//             let newDiv = `<div>${key}: ${item[key]}</div>`
//             root.innerHTML += newDiv
//         }
//     }
// }

// let data = fetch('https://jsonplaceholder.typicode.com/users')
// data
// .then((res) => {
//     if (res.status === 200) return res.json();
// })
// .then((data) => render(data))
// .catch((err) => console.log(err))

// function render(arr) {
//     const root = document.getElementById('root')
//     for (item of arr){
//         let newDiv = `<div>Name:  ${item.name},  Username:  ${item.username},  Email:  ${item.email}</div>`
//         root.innerHTML += newDiv
//     }
// }