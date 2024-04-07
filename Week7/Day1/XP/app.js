// // Exercise 1 : Comparison
// const compareToTen = (num) =>{
//     return new Promise((res, rej) =>{
//         if (num <= 10) {
//             res(num)
//         } else {
//             rej('rejected (more than 10)')
//         }
//     })
// }

// compareToTen(15)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// compareToTen(8)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

//   Exercise 2 : Promises

let p = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve('success')
    }, 4000)
})

p.then(result => console.log(result)).catch(error => console.log(error))

// Exercise 3 : Resolve & Reject

let pRes = Promise.resolve(3)
pRes.then(result => console.log(result))

let pRej = Promise.reject('Boo')
pRej.catch(error => console.log(error))