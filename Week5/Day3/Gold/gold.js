// // Exercise 1 : Is_Blank

// let str = ''

// console.log(isBlank(str));

// function isBlank(str) {
//     if (str.length === 0)
//         return true
//     else return false
// }
// // Exercise 2 : Abbrev_name
// console.log(abbrev("Daniel Kovalenko"));

// function abbrev(fullName) {
//     let words = fullName.split(" ")
//     let abbr = ''
    
//     for (word of words){
//         if (words.indexOf(word) > 0){
//             abbr += ` ${word[0]}.`
//         }
//         else{
//             abbr += word
//         }
//     }

//     return abbr
// }

// //Exercise 3 : SwapCase
// let str = "Abcde"
// console.log(SwapCase(str))

// function SwapCase(str) {
//     let newStr = ''

//     for (letter of str){
//         if (/[a-z]/.test(letter)) {
//             newStr += letter.toUpperCase()
//         } else if (/[A-Z]/.test(letter)) {
//             newStr += letter.toLowerCase()
//         } else {
//             newStr += letter
//         }
//     }

//     return newStr
// }

// Exercise 5 : Red Table
// let diagonalCells = document.getElementsByClassName('diagonal')

// for (cell of diagonalCells){
//     cell.style.backgroundColor = 'red'
// }