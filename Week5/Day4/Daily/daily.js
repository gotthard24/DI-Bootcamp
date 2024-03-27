let libButton = document.getElementById('lib-button')
let story = document.getElementById('story')

libButton.addEventListener('click', function (event) {
    event.preventDefault()
    let newP = document.createElement('p')
    newP.textContent = genStory()
    story.appendChild(newP)
})

function genStory() {
    let noun = document.getElementById('noun')
    let adjective = document.getElementById('adjective')
    let person = document.getElementById('person')
    let verb = document.getElementById('verb')
    let place = document.getElementById('place')

    let inputs = [noun,adjective,person,verb,place]
    let output = 
    `
    Once upon a time, in a far-off land, there was an ${adjective.value} ${noun.value} named ${person.value}. 
    ${person.value} had always dreamed of ${verb.value} on the ${place.value}, but everyone thought she was just a silly. 
    Determined to prove them wrong, ${person.value} embarked on an incredible journey. With every step she took, the ground shook beneath her, 
    and the stars twinkled with anticipation. Finally, after many adventures, ${person.value} reached the ${place.value}. 
    As she ${verb.value} gracefully among the craters, the moonbeams danced with her, lighting up the night sky. 
    From that day on, ${person.value} became known as the most famous ${adjective.value} ${noun.value} in the universe, 
    inspiring others everywhere to follow their dreams.
    `

    for(word of inputs){
        if(word.value.trim() === ''){
            alert("Please enter a value in all input fields.")
            return undefined
        }
    } 
    return output
}