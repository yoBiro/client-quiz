import { questions } from '../../scripts/data/questions.js'

const card = document.querySelector('question-card')
const nextButton = document.querySelector('.button-next')

let currentQuestion = 0
let currentAnswer = null
let selectedAnswers = []

card.data = questions[currentQuestion]

card.addEventListener('answer-selected', (event) => {
    currentAnswer = event.detail.answer
})

console.log(nextButton)
nextButton.addEventListener('click', () => {
    if(currentAnswer === null) 
        return selectedAnswers.push(currentAnswer)

    selectedAnswers.push(currentAnswer)
    sessionStorage.setItem(
        'answers', JSON.stringify(selectedAnswers)
    )


    
    currentQuestion++
    currentAnswer = null
    
    if(currentQuestion < questions.length){
        card.data = questions[currentQuestion]
    }
    else{
        window.location.href = './quizResult/quizResult.html'
        finishQuiz()
    }

})


console.log(selectedAnswers)
console.log(questions)

function finishQuiz() {

    let score = 0

    questions.forEach((question, index) => {
        console.log({
            respostaUsuario: selectedAnswers[index],
            respostaCorreta: question.answer
        })
        if(selectedAnswers[index] === question.answer){
            score++
        }

    })

    console.log(selectedAnswers)
    console.log(
        `Você acertou ${score} de ${questions.length}`
    )
}