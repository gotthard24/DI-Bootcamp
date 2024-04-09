// nums = [0,0,1,1,1,2,2,2,3,3,3,4]

// function removeDuplicates(nums) {
//     let current = 'current'
//     let currNum = 1
//     let goalIndx = 0
//     let duplicates = 0
//     let length = nums.length

//     for (let i = 0; i < length; i++){
//         if (nums[i] !== current){
//             if(currNum < 3){
//                 current = nums[i]
//                 nums[goalIndx] = current
//                 currNum++
//             } else {
//                 currNum = 0
//             }
//             goalIndx++
//         } else {
//             duplicates++
//         }
//     }
//     for(let i = 0; i < duplicates; i++){
//         nums.pop()
//     }
//     return nums.length
// }
// removeDuplicates(nums)
// console.log(nums);

// fetch('https://jsonplaceholder.typicode.com/users', {
//     method: "GET"
// })
// .then(resp => {
//     console.log(resp)
//     return resp.json()
// })//.json()//.text()
// .then(data => console.log(data))

// function getJoke() {
//     const url = 'https://jokes-always.p.rapidapi.com/erJoke';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '20b7229d39mshf585d9bcab08f66p12c819jsna8706c5b42bd',
//             'X-RapidAPI-Host': 'jokes-always.p.rapidapi.com'
//         }
//     };

//     fetch(url,options)
//     .then(resp =>{
//         return resp.json()
//     })
//     .then(resp => {
//         console.log(resp.data)
//     }
//     )
// }

// getJoke()

nums = [0,0,1,1,1,2,2,2,3,3,3,4]

function deleteDupls(nums) {
    let count = 0;
    let prev = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === prev) {
            count++;
            if (count > 1) {
                nums.splice(i, 1); 
                i--; 
            }
        } else {
            count = 0; 
            prev = nums[i]; 
        }
    }
}

deleteDupls(nums)
console.log(nums);
// let post = {
//     userId: 6,
//     title: 'my title',
//     body: 'bla bla bla'
// }

// let url = 'https://jsonplaceholder.typicode.com/users'
// let options = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(post)
// }

// fetch(url,options)
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
// let post ={
//     name: prompt('name: '),
//     username: prompt('username: '),
//     email: prompt('email: ')
// }
// let url = 'https://users-18kl.onrender.com/userjson'
// let options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(post)
//     }

// function addMe(event) {
//     event.preventDefault()
//     const name = event.target.name.value
//     const username = event.target.username.value
//     const email = event.target.email.value
//     postUser(name,username,email)
// }

// async function postUser(name,username,email) {
//     let url = 'https://users-18kl.onrender.com/userjson'
//     let options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({name,username,email})
//     }
//     try {
//         const resolve = await fetch(url, options)
//         const data = await resolve.json()
//         let html = data.map((item) => {
//             return `<div>${item.name}</div>`
//         })
//         document.getElementById('root').innerHTML = html.join('')
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }


// fetch(url,options)
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))