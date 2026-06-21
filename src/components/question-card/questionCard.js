import sheet from './questionCard.css' with { type: 'css' };
import '../button/primary/buttonPrimary.js';
import '../button/secondary/buttonSecondary.js';

class QuestionCard extends HTMLElement {

    constructor() {
        super()

        this.attachShadow({ mode: 'open' })
        this.shadowRoot.adoptedStyleSheets = [sheet]
    }

    set data(question) {
        this.render(question)
    }

    render(question) {

        this.shadowRoot.innerHTML = `
            <h2>${question.question}</h2>

            <div class="options-container">
                ${question.options.map((option, index) => `
                    <button class="option" data-index="${index}">
                        ${option}
                    </button>
                `).join('')}
            </div>
        `

        const options = this.shadowRoot.querySelectorAll('.option')

        options.forEach(button => {
            button.addEventListener('click', () => {
                options.forEach(btn =>
                    btn.removeAttribute('selected')
                )
                
                button.setAttribute('selected', '')
            })
        })

        options.forEach(button => {
            button.addEventListener('click', () => {
                this.dispatchEvent(
                    new CustomEvent('answer-selected', {

                        detail: {
                            answer: Number(button.dataset.index)
                        },

                        bubbles: true,
                        composed: true
                    })
                )
            })
        })
    }

}

customElements.define(
    'question-card', QuestionCard
)