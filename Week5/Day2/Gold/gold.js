// // Exercise 1 : Divisible By Three

// let numbers = [123, 8409, 100053, 333333333, 7]

// for (let i = 0; i < numbers.length; i++) 
// {
//     console.log(numbers[i] % 3 == 0)
// }

// // Exercise 2 : Attendance

// let guestList = {
//     randy: "Germany",
//     karla: "France",
//     wendy: "Japan",
//     norman: "England",
//     sam: "Argentina"
// }

// userInput = prompt("Enter student name: ")

// if (userInput in guestList)
// {
//     console.log(`Hi, i am ${userInput} from ${guestList[userInput]}`)
// }
// else
//     console.log(`Hi, i am the guest`)

// Exercise 3 : Playing With Numbers
let age = [20,5,12,43,98,55];
let sum = 0
let temp = 0
let maxNum

for (item of age)
{
    if (temp < item)
    {
        temp = item
    }
    sum += item
}
maxNum = temp

console.log(sum)
console.log(maxNum)