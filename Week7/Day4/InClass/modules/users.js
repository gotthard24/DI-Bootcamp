async function getUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users'

    let response = await fetch(url)
    try {
        if (response.status !== 200){
            throw new Error('Oops')
        }
        let data = await response.json()

        return data      
    } catch (error) {
        console.log(error);
    }
}

module.exports = getUsers