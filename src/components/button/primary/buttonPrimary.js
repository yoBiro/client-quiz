import sheet from './buttonPrimary.css' with { type: 'css' };

class AppButton extends HTMLElement {

    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.adoptedStyleSheets = [sheet];
    }

    connectedCallback(){
        this.shadowRoot.innerHTML = `
            <button class="app-button-primary">
                <slot></slot>
                <img src="${this.getAttribute('icon') || 'https://img.icons8.com/shadow/FFFFFF/24/up-left-arrow.png" alt="up-left-arrow"/>'}
            </button>
        `;
    }
}

customElements.define('app-button-primary', AppButton);