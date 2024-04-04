let quotes = []
let currentObj
let id = 0

const addQuote = (author, quote) =>{
    quotes.push({id, author, quote, likes : 0})
    id++
}

addQuote('Eleanor Roosevelt', 'Do one thing every day that scares you')
addQuote('Martin Luther King Jr', 'Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate: only love can do that')
addQuote('Franklin D. Roosevelt', 'The only thing we have to fear is fear itself')

console.log(quotes);

function generate(){
    let randInt = Math.floor(Math.random() * quotes.length)
    let message = `"${quotes[randInt].quote}"(c) ${quotes[randInt].author} .Likes: ${quotes[randInt].likes}`
    let div = `<div id="card">${message}</div>`
    currentObj = quotes[randInt]
    document.getElementById('card').innerHTML = div
    return currentObj
}

function onLike(){
    currentObj['likes']++
}

function chars(){
    message = document.getElementById('card').textContent.length
    let div = `<div id="info">Quote contents ${message} chars</div>`
    document.getElementById('info').innerHTML = div
}

function words(){
    message = document.getElementById('card').textContent.split(' ').length
    let div = `<div id="info">Quote contents ${message} words</div>`
    document.getElementById('info').innerHTML = div
}

function addQuoteHtml(event) {
    event.preventDefault()
    let author = document.forms[0]['author'].value
    let quote = document.forms[0]['quote'].value
    let likes = 0
    quotes.push({id, author, quote, likes})
    id++
}