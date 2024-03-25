const numbers = [5,0,9,1,7,4,2,6,3,8];

// for (let i = 0; i <= numbers.length; i++)
// {
//     let minInd = i
//     for (let j = 0; j <= numbers.length; j++)
//     {
//         if(numbers[j] < numbers[minInd])
//         {
//             minInd = j
//         }
//         if(minInd != i)
//         {
//             let tempNum = numbers[i]
//             numbers[i] = numbers[minInd]
//             numbers[minInd] = tempNum
//         }
//     }
// }

for (let i = 0; i < numbers.length - 1; i++) 
{
    for (let j = 0; j < numbers.length - i - 1; j++) 
    {
        if (numbers[j] > numbers[j + 1]) 
        {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}

for (number of numbers)
console.log(number)
    