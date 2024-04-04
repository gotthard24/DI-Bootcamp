// function nameFromUrl() {
//     const url = new URL(location.href)
//     const params = new URLSearchParams(url.search);
//     const name = params.get('name');
//     const lastname = params.get('lastname');
//     message = name + lastname
//     display(message)
// }

function nameFromUrl() {
    let url = location.href;
    let indexName = url.indexOf("name");
    let indexLastName = url.indexOf("lastname");
    let name = url.substring(indexName + 5, indexLastName - 1)
    let lastname = url.substring(indexLastName + 9)
    message = name + " " + lastname
    display(message)
}

function display(message) {
    // let section = document.createElement('section')
    // section.textContent = message
    // document.getElementsByTagName('body')[0].appendChild(section)

    let section = `<section>${message}</section>`
    document.getElementsByTagName('body')[0].innerHTML += section
}

console.log(nameFromUrl());

// Daily Challenge : True Or False

function trueOrFalse(arr) {
    for (item of arr){
        if (item == false) return false
    }
    return true
}

console.log(trueOrFalse([4,5,6,0]));