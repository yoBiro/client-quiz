import sheet from './progressBar.css' with { type: 'css' };

class QuizProgress extends HTMLElement {

    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.adoptedStyleSheets = [sheet];
    }

    render(current, total) {

        const percentage = Math.round((current / total) * 100);

        this.shadowRoot.innerHTML = `
            <div class="progress-container">

                <div class="progress-header">
                    <span>Seu progresso...</span>
                    <span>${percentage}%</span>
                </div>

                <div class="progress-track">
                    <div
                        class="progress-fill"
                        style="width:${percentage}%">
                    </div>
                </div>

            </div>
        `;
    }
}

customElements.define(
    'quiz-progress', QuizProgress
);