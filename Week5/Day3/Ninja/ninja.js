// // Exercise 1: Random Number
// let randInt = Math.floor(Math.random() * 100)

// for (i = 1; i < randInt;i++){
//     if (i % 2 === 0)
//         console.log(i)
// }

// // Exercise 2: Capitalized Letters
// capito('abcd')

// function capito(string) {
//     let newStrEven = ''
//     let newStrOdd = ''
    
//     for(let char of string) {
//         if (string.indexOf(char) % 2 === 0) {
//             newStrEven += char.toUpperCase();
//             newStrOdd += char.toLowerCase();
//         } else {
//             newStrEven += char.toLowerCase();
//             newStrOdd += char.toUpperCase();
//         }
//     }
//     console.log(newStrEven);
//     console.log(newStrOdd);
// }

// // Exercise 3: Is Palindrome?
// let word = 'madam'

// console.log(isPalindrome(word))

// function isPalindrome(word) {
//     for (i = 0; i <= word.length - 1; i++){
//         if(word[i] === word[word.length - 1 - i]){
//             console.log(word[i]);
//             console.log(word[word.length - 1 - i]);
//         }
//         else{
//             return false
//         }
//     }
//     return true
// }