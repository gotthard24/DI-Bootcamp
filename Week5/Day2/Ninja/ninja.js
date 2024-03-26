// let person1 =
// {
//     FullName : "Kovalenko Daniel",
//     Mass : 60,
//     Height : 170,
//     BMI: function() {
//         let height = this.Height / 100
//         let bmi = this.Mass / (height * height)
//         return bmi;
//     }
// }

// let person2 =
// {
//     FullName : "Dovalenko Kaniel",
//     Mass : 99,
//     Height : 99,
//     BMI: function() {
//         let height = this.Height / 100
//         let bmi = this.Mass / (height * height)
//         return bmi;
//     }
// }

// for (key in person1)
// {
//     if (key === 'BMI')
//         console.log(`${key} : ${Math.round(person1.BMI())}`)
//     else
//         console.log(`${key} : ${person1[key]}`)
// }

// for (key in person2)
// {
//     if (key === 'BMI')
//         console.log(`${key} : ${Math.round(person2.BMI())}`)
//     else
//         console.log(`${key} : ${person2[key]}`)
// }

// console.log(compareBMI(person1, person2))

// function compareBMI(person1, person2) 
// {
//     if (Math.round(person2.BMI()) > Math.round(person1.BMI()))
//         return person2['FullName']
//     else
//         return person1['FullName']
// }


let grades = [70,0,100,100,90,50,85,30]
let is_passed = findAvg(grades) >= 65
let avg = findAvg(grades)

if (is_passed)
    alert("You have passed the exam")
else
    alert("You have failed the exam")

console.log(avg)

function findAvg(list) 
{
    let sum = 0
    let avg = 0
    for (item of list)
        sum += item

    avg = sum / list.length
    return avg
}