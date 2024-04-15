let currentQ = 0
let score = 0
let emojis

async function getEmojis() {
    const url = 'http://localhost:7777/emojis';
    try {
        const response = await fetch(url);
        if (!response === 200) {
            throw new Error(`${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        return data
    } catch (error) {
        console.error(error);
    }
}

async function question(num){
    const section = document.getElementById('output')
    const data = await getEmojis()
    let options

    section.textContent = data[num].emoji
    if (num < data.length/2)
    {
        options = [data[0].name,data[1].name,data[2].name,data[3].name]
    } else{
        options = [data[2].name,data[3].name,data[4].name,data[5].name]
    }
    options = shuffleArray(options)

    document.getElementById(`option1`).textContent = options[0]
    document.getElementById(`option2`).textContent = options[1]
    document.getElementById(`option3`).textContent = options[2]
    document.getElementById(`option4`).textContent = options[3]

    document.getElementById('question').style.display = 'block'
    emojis = data
}

function start(event) {
    event.preventDefault()
    document.getElementById('startbtn').style.display = 'none';
    question(currentQ)
}

function check(event){
    event.preventDefault()
    // let guess = event.target.textContent
    // let name = emojis[currentQ].name

    if(event.target.textContent === emojis[currentQ].name){
        document.getElementById('score').textContent = ++score
        document.getElementById('output').innerHTML += 'Good Job'
    } else{
        document.getElementById('output').innerHTML += 'Wrong answer'
    }

    if (currentQ < emojis.length- 1){
        document.getElementById('nextbtn').style.display = 'block';
    } else {
        document.getElementById('output').innerHTML = '<h1>THE END</h1>'
    }
    document.getElementById('question').style.display = 'none'

    // fetch('http://localhost:7777/emojis',{
    //     method: "POST",
    //     headers:{
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({name, guess})
    // })
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err))
}

function next(event) {
    event.preventDefault()
    document.getElementById('nextbtn').style.display = 'none';
    currentQ ++
    question(currentQ)
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}