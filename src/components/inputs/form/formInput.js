import sheet from './formInput.css' with { type: 'css' };

class AppFormInput extends HTMLElement {

    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.adoptedStyleSheets = [sheet];
    }

    connectedCallback(){
        const name = this.getAttribute('name');
        const placeholder = this.getAttribute('placeholder') || 'Placeholder';


        this.shadowRoot.innerHTML = `
            <div class="grid gap-2">
                <input type="text" name="${name}" placeholder="${placeholder}">
            </div>
        `;
    }
}

customElements.define('app-form-input', AppFormInput);