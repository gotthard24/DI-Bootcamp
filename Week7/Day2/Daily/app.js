async function submitHandler(event){
    event.preventDefault()
    const root = document.getElementById('root')
    const api_key = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
    const rating = 'g';
    const url = `https://api.giphy.com/v1/gifs/random?rating=${rating}&tag=${event.target.tag.value}&api_key=${api_key}`;
    
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        console.log(data);

        let newDiv = `<div>
        <img src=${data.data.images.original.url}>
        <button onclick='deleteHandler(event)'>DELETE GIF</button>
        </div>`
        root.innerHTML += newDiv
    } catch (error) {
        console.error('Error:', error.message);
    }
}

function deleteHandler(event) {
    event.preventDefault()
    let div = event.target.parentElement;
    div.remove()
}

function deleteAll(event) {
    event.preventDefault()
    document.getElementById('root').innerHTML = ''
}