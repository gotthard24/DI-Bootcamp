const {triviaQuestions} = require('../config/questions.js')

let score = 0;
let currentQ = 0

const start = (req, res) =>{
    currentQ = 0
    res.json(triviaQuestions[0].question)
}

const guess = (req, res) =>{
    const {answer} = req.body
    let result

    if (answer.toLowerCase() === triviaQuestions[currentQ].answer.toLowerCase()){
        result = 'Right'
        score++
    }
    else{
        result = 'Wrong'
    }
    
    if (currentQ < triviaQuestions.length - 1){
        currentQ++
        let next_question = triviaQuestions[currentQ].question
        res.json({result, next_question})
    }
    else{
        res.send({result, message: "The End"})
    }
}

const showScore = (req, res) =>{
    res.send("Your score: " + score)
}

module.exports = {
    start,
    guess,
    showScore,
}