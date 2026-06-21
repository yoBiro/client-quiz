import sheet from './buttonPrimary.css' with { type: 'css' };

class AppButton extends HTMLElement {

    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.adoptedStyleSheets = [sheet];
    }

    connectedCallback(){
        const type = this.getAttribute('type') || 'button'

        this.shadowRoot.innerHTML = `
            <button class="app-button-primary" type="${type}">
                <slot></slot>
            </button>
        `;
    }
}

customElements.define('app-button-primary', AppButton);