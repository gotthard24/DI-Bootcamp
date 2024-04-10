// import {people} from './data.js'

// function calcAvg(arr) {
//     let sum = 0
//     arr.forEach(element => {
//         sum += element.age
//     });
//     return Math.floor(sum/arr.length)
// }

// console.log(calcAvg(people));

const fileManager = require('./fileManager.cjs');

fileManager.readFile('helloWorld.txt', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});

fileManager.writeFile('byeWorld.txt', 'Writing to the file', (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('File written successfully.');
});