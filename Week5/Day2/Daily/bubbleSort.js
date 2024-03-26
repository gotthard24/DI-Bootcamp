const numbers = [5,0,9,1,7,4,2,6,3,8,423,42,14,12,34,454,6,567,4,5,4,24,3253,36,542,344,1243];

for (let i = 0; i <= numbers.length; i++)
{
    for (let j = i + 1; j <= numbers.length; j++)
    {
        if(numbers[j] > numbers[i])
        {
            let tempNum = numbers[i]
            numbers[i] = numbers[j]
            numbers[j] = tempNum
        }
    }
}

// for (i = 0; i < numbers.length - 1; i++) 
// {
//     for (j = 0; j < numbers.length - i - 1; j++) 
//     {
//         if (numbers[j] > numbers[j + 1]) 
//         {
//             let temp = numbers[j];
//             numbers[j] = numbers[j + 1];
//             numbers[j + 1] = temp;
//         }
//     }
// }

for (number of numbers)
console.log(number)
    