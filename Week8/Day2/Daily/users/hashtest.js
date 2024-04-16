const bcrypt = require('bcrypt')
const {db} = require('./config/data.js')

// const password1 = 'password1'
// const hashed1 = '$2b$10$QFX/gRO9E1E1S1NtQAVpnuB6KrX/I0kdzUoOA1s2OIC0L/KcgarNa'
// const password2 = 'password2'
// const hashed2 = '$2b$10$wTQu66qY8bcgf5u1iQjmmeE1IdrAz3E8ZDmDJF9vjVXOE.dtd.l16'
// const password3 = 'password3'
// const hashed3 = '$2b$10$5Z5gyfLloBjGiMJBDWQBWOB.LU9ZFrSW9rR7bKmm4jsSbQevrvWfe'

async function hashPassword(password) {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
}

async function compare(password, hashed) {
    try {
        const result = await bcrypt.compare(password, hashed);
        if (result) {
            console.log('Password is correct');
            return true;
        } else {
            console.log('Password is incorrect');
            return false;
        }
    } catch (error) {
        console.error('Error comparing passwords:', error);
        throw error; 
    }
}


// hashPassword(password)
//     .then(hashedPassword => bcrypt.compare(password, hashedPassword)
//     .then((result) => {
//         if (result) {
//             console.log('Password is correct');
//         } else {
//             console.log('Password is incorrect');
//         }
//     })
//     .catch((error) => {
//         console.error('Error comparing passwords:', error);
//     }))
//     .catch(error => console.error('Error hashing password:', error));

// bcrypt.compare(password1, hashed1)
//     .then(result =>{
//         if (result) {
//             console.log('Password is correct');
//         } else {
//             console.log('Password is incorrect');
//         }
//     })
//     .catch((error) => {
//         console.error('Error comparing passwords:', error);
//     })

// bcrypt.compare(password2, hashed2)
//     .then(result =>{
//         if (result) {
//             console.log('Password is correct');
//         } else {
//             console.log('Password is incorrect');
//         }
//     })
//     .catch((error) => {
//         console.error('Error comparing passwords:', error);
//     })

// bcrypt.compare(password3, hashed3)
//     .then(result =>{
//         if (result) {
//             console.log('Password is correct');
//         } else {
//             console.log('Password is incorrect');
//         }
//     })
//     .catch((error) => {
//         console.error('Error comparing passwords:', error);
//     })


// hashPassword('password3')
//     .then(hashedPassword => console.log(hashedPassword))
//     .catch(error => console.error('Error hashing password:', error));

module.exports = {
    hashPassword,
    compare
}