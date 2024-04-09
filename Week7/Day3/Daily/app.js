addToSelect()

async function convert(event) {
    event.preventDefault()

    // let curr1 = document.forms[0].currency1.value.slice(0,3)
    // let curr2 = document.forms[0].currency2.value.slice(0,3)
    // let amount = document.forms[0].amount.value

    const api_key = '28b90b480c65969a8af17862'
    const url = `https://v6.exchangerate-api.com/v6/${api_key}/latest/USD/`

    let data = await getData(url)
    let result = await calculate(data.conversion_rates)
    document.forms[0].result.value = result
}

// async function convert(event) {
//     event.preventDefault()
//     let curr1 = document.forms[0].currency1.value.slice(0,3)
//     let curr2 = document.forms[0].currency2.value.slice(0,3)
//     let amount = document.forms[0].amount.value

//     const api_key = '28b90b480c65969a8af17862'
//     const url = `https://v6.exchangerate-api.com/v6/${api_key}/pair/${curr1}/${curr2}/${amount}`

//     data = await getData(url)
//     document.forms[0].result.value = data.conversion_result
// }

async function calculate(obj) {
    let curr1 = document.forms[0].currency1.value.slice(0,3)
    let curr2 = document.forms[0].currency2.value.slice(0,3)
    let amount = document.forms[0].amount.value
    console.log((obj[curr1] / obj[curr2]) * amount);
    return (obj[curr2] / obj[curr1]) * amount
}

function swap() {
    // event.preventDefault()
    let curr1 = document.forms[0].currency1.value
    document.forms[0].currency1.value = document.forms[0].currency2.value
    document.forms[0].currency2.value = curr1
}

async function getData(url) {
    try {
        let resp = await fetch(url)
        if (resp.status !== 200) {
            throw new Error(`${resp.status}`)
        }
        let data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

async function addToSelect() {
    const api_key = '28b90b480c65969a8af17862'
    const url = `https://v6.exchangerate-api.com/v6/${api_key}/codes`

    let currChoice1 = document.getElementById('curr1')
    let currChoice2 = document.getElementById('curr2')
    let currenciesData = await getData(url)
    let currencies = currenciesData.supported_codes
    currencies.forEach(element => {
        let option1 = document.createElement('option')
        let option2 = document.createElement('option')
        option1.value = element[0]
        option2.value = element[0]
        option1.text = `${element[0]} ${element[1]}`
        option2.text = `${element[0]} ${element[1]}`
        currChoice1.appendChild(option1)
        currChoice2.appendChild(option2)
    });
}