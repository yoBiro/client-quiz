import sheet from './dateInput.css' with { type: 'css' };

class AppDateInput extends HTMLElement {

    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.adoptedStyleSheets = [sheet];
    }

    connectedCallback(){
        const name = this.getAttribute('date') || 'date';
        this.shadowRoot.innerHTML = `
        <div class="app-input-date">
            <input type="date">
            <slot name="icon"></slot>
        </div>
        `;
    }
}

customElements.define('app-date-input', AppDateInput);