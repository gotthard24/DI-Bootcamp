let table = document.getElementById('sampleTable')

function insertRow(){
    let row = document.createElement('tr')
    let cell1 = document.createElement('td')
    let cell2 = document.createElement('td')
    table.appendChild(row)
    cell1.textContent = 'smth new'
    cell2.textContent = 'smth new'
    row.appendChild(cell1)
    row.appendChild(cell2)
}