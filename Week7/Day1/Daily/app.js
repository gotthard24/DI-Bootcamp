// function makeAllCaps(array){
//     const nonStrings = array.filter(element => typeof element !== 'string');
//     return new Promise((res, rej) =>{
//         if (nonStrings.length > 0){
//             rej('Only full string input is valid')
//         } else {
//             res(array.map(item => item.toUpperCase()))
//         }
//     })
// }

// function sortWords(arrayUpper){
//     return new Promise((res, rej) =>{
//         if (arrayUpper.length < 4){
//             rej('Array is too small (Less than 4 elements)')
//         } else {
//             res(arrayUpper.sort())
//         }
//     })
// }

// //in this example, the catch method is executed
// makeAllCaps([1, "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

// //in this example, the catch method is executed
// makeAllCaps(["apple", "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

// //in this example, you should see in the console, 
// // the array of words uppercased and sorted
// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
//       .catch(error => console.log(error))

// 2nd Daily Challenge
const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`

  function toJs(jsonString) {
    return new Promise((res, rej) => {
        try {
            const parsedJson = JSON.parse(jsonString);
            if (Object.keys(parsedJson).length === 0) {
                rej('JSON is empty');
            } else {
                res(parsedJson);
            }
        } catch (error) {
            rej('Invalid JSON string: ' + error.message);
        }
    });
}

function toMorse(morseJS) {
    return new Promise((res, rej) => {
        const userInput = prompt("Enter something").toLowerCase();
        const chars = userInput.split('');
        const uniqueElements = chars.filter(element => !morseJS[element] && element !== ' ');

        if (uniqueElements.length > 0) {
            rej('Unknown symbols detected');
        } else {
            const morseChars = chars.map(letter => morseJS[letter]);
            res(morseChars);
        }
    });
}

function joinWords(morseChars) {
    morseChars.forEach(item => {
        const newDiv = document.createElement('div');
        newDiv.textContent = item;
        document.getElementById('root').appendChild(newDiv);
    });
}

toJs(morse)
    .then(result => toMorse(result))
    .then(result => joinWords(result))
    .catch(error => console.error(error));