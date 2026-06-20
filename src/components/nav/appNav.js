import sheet from './appNav.css' with { type: 'css' };
import '../button/primary/buttonPrimary.js';
import '../button/secondary/buttonSecondary.js';

class AppNav extends HTMLElement {

    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.adoptedStyleSheets = [sheet];
    }

    connectedCallback(){
        const btnSecondary = this.getAttribute('btn-secondary');
        const btnPrimary = this.getAttribute('btn-primary');

        this.shadowRoot.innerHTML = `
            <nav class="app-nav">
                <div class="nav-container">
                    <div class="nav-logo">
                        <div class="logo-container">
                            <img src="/src/assets/images/logo-vdq.png" alt="VdQ Quiz Logo">
                        </div>
                        <span class="logo-text">Visão de Quadra</span>
                    </div>
                    <div class="gap-5 nav-buttons">
                        <app-button-secondary>
                            <a href=${this.getAttribute('btn-secondary-link') || '#'} class="nav-link2">
                                ${btnSecondary || 'Secondary'}
                            </a>
                        </app-button-secondary>
                        <app-button-primary>
                            <a href=${this.getAttribute('btn-primary-link') || '#'} class="nav-link1">
                                ${btnPrimary || 'Primary'}
                            </a>
                        </app-button-primary>
                    </div>
                </div>
            </nav>
        `;
    }
}

customElements.define('app-nav', AppNav);