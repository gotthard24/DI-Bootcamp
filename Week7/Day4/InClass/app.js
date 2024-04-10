// const greeting = require('./modules/main.js')
// const {sum, multiply} = require('./modules/math.js')
// // console.log(greeting);

// console.log(sum(2,3))
// console.log(multiply(2,3))

const getUsers = require('./modules/users')

async function showUsers() {
    let users = await getUsers()
    console.log(users);
}

showUsers()

getUsers().then(users => console.log(users))