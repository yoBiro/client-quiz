import { questions } from '../../../scripts/data/questions.js'

export function getResultQuiz() {

    const selectedAnswers = JSON.parse(sessionStorage.getItem('answers')) || []

    const details = questions.map((question, index) => {
        const respostaUsuario = selectedAnswers[index]

        const respostaCorreta = question.answer

        return {
            numeroQuestao: index + 1,
            pergunta: question.question,

            respostaUsuario: question.options[respostaUsuario],
            respostaCorreta: question.options[respostaCorreta],

            acertou: respostaUsuario === respostaCorreta
        }
    })

    return {
        acertos: details.filter(item => item.acertou).length,
        totalQuestoes: questions.length, details
    }
}

function makeResultQuiz() {
    const resultScore =
    document.querySelector('#result-score')

const resultMessage =
    document.querySelector('#result-message')

const resultDetails =
    document.querySelector('#result-details')

const restartButton =
    document.querySelector('#restart-button')

const answers =
    JSON.parse(
        sessionStorage.getItem('answers')
    ) || []

if (answers.length === 0) {

    location.href =
        '../quiz/quiz.html'

} else {

    const result =
        getResultQuiz()

    const messages = {
        0: 'Nem tente novamente lil bro 😭🥀🙏',
        1: 'Nem tente novamente lil bro 😭🥀🙏',
        2: 'Você vai ser um eterno rookie!',
        3: 'Você vai ser um eterno rookie!',
        4: 'Você pode ser considerado MVP 🏀',
        5: 'Você pode ser considerado MVP 🏀',
        6: 'Você é o GOAT 🐐'
    }

    resultScore.textContent =
        `${result.acertos}/${result.totalQuestoes}`

    resultMessage.textContent =
        messages[result.acertos]
        || 'Quiz finalizado!'

    resultDetails.innerHTML =
        result.details.map(item => {

            const statusClass =
                item.acertou
                    ? 'correct'
                    : 'wrong'

            const statusText =
                item.acertou
                    ? 'Correta'
                    : 'Incorreta'

            return `
                <article class="result-item ${statusClass}">

                    <h3>
                        Questão ${item.numeroQuestao}
                        - ${statusText}
                    </h3>

                    <p>
                        <strong>Sua resposta:</strong>
                        ${item.respostaUsuario}
                    </p>

                    <p>
                        <strong>Resposta correta:</strong>
                        ${item.respostaCorreta}
                    </p>

                </article>
            `

        }).join('')

    }

    restartButton.addEventListener('click', () => {
        sessionStorage.removeItem('answers')
        location.href =
            '../quiz.html'

    })
}

makeResultQuiz();