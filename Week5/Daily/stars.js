let maxLength = 6
let maxHeight = 6

for (i = 1; i <= maxLength; i++)
{
    console.log('*'.repeat(i))
}

let rows = []
for (let i = 1; i <= maxHeight; i++) 
{
    let row = ''
    for (let j = 1; j <= i; j++) 
    {
        row += '*'
    }
    rows.push(row)
}

for (let row of rows)
console.log(row)