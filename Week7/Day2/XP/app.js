// Exercise 1 : Giphy API
// let url = 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'

// async function getGiphs(query) {
//     const api_key = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
//     const rating = 'g'
//     const url = `https://api.giphy.com/v1/gifs/search?q=${query}&rating=${rating}&api_key=${api_key}`
//     try {
//         let respond = await fetch(url)
//         if (respond.status === 200)
//         {
//             let data = await respond.json()
//             console.log(data);
//         }       
//     } catch (error) {
//         console.log(error);
//     }
// }

// getGiphs('hilarious')

// Exercise 2 : Giphy API

async function getGiphs(query, limit, start) {
    const api_key = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
    const rating = 'g'
    const url = `https://api.giphy.com/v1/gifssearch?q=${query}&limit=${limit}&offset=${start}&rating=${rating}&api_key=${api_key}`
    try {
        let response = await fetch(url);

        if (response.status !== 200) {
            throw new Error(`Error! status: ${response.status}`);
        };

        let data = await response.json();
        console.log(data);
     
    } catch (error) {
        console.log(error);
    }
}

getGiphs('sun',10,2)

// Exercise 3 : Async Function

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));

// async function getRespond(url) {
//     try {
//         let response = await fetch(url);

//         if(response.status !== 200){
//             throw new Error(`Error! status: ${response.status}`)
//         }

//         let data = await response.json();
//         console.log(data.result);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getRespond("https://www.swapi.tech/api/starships/9/")

// Exercise 4: Analyze
// Instructions
// Analyse the code provided below - what will be the outcome?

// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     let result = await resolveAfter2Seconds();
//     console.log(result);
// }

// asyncCall();