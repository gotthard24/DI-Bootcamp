let sentence1 = 'I am Lord Voldemort'
let sentence2 = 'Tom Marvolo Riddle'

console.log(isAnagramm(sentence1, sentence2))

function isAnagramm(string1, string2) {
    let chars1 = string1.toLowerCase().split('')
    let chars2 = string2.toLowerCase().split('')
    chars1.sort()
    chars2.sort()
    let sorted1 = chars1.join('')
    let sorted2 = chars2.join('')

    console.log(sorted1)
    console.log(sorted2)

    if(sorted1.trim() === sorted2.trim())
        return true
    else return false
}