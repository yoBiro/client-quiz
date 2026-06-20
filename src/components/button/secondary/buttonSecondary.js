import sheet from './buttonSecondary.css' with { type: 'css' };

class AppButtonSecondary extends HTMLElement {

    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.adoptedStyleSheets = [sheet];
    }

    connectedCallback(){
        this.shadowRoot.innerHTML = `
            <button class="app-button-secondary">
                <slot></slot>
            </button>
        `;
    }
}

customElements.define('app-button-secondary', AppButtonSecondary);