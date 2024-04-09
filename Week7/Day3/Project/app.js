async function getInfo(url) {
    try {
        let response = await fetch(url)
        if (response.status !== 200){
            throw new Error('Oops')
        }
        let data = await response.json()
        // console.log(data.result.properties);
        return data.result.properties
    } catch (error) {
        console.log(error);
    }
}

async function displayCharacter(event) {
    event.preventDefault()
    let icon = document.getElementById('loadicon')
    document.getElementById('props').innerHTML = '<p>LOADING</p>'
    icon.style.display = 'block'
    let randInt = Math.floor(Math.random() * 84)
    const url = `https://www.swapi.tech/api/people/${randInt}`

    let props = await getInfo(url)
    let name = props.name
    let height = props.height
    let gender = props.gender
    let birthYear = props.birth_year
    let homeWorldUrl = props.homeworld
    let homeWorldData = await getInfo(homeWorldUrl)
    let homeWorld = homeWorldData.name
    icon.style.display = 'none'
    console.log(name, height, gender, birthYear, homeWorld)

    let newDiv = `<div>
    <p>Name: ${name}</p>
    <p>Height: ${height}</p>
    <p>Gender: ${gender}</p>
    <p>Birth Year: ${birthYear}</p>
    <p>Home World: ${homeWorld}</p>
    </div>`

    document.getElementById('props').innerHTML = newDiv
}
