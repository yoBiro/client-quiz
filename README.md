<p align="center">
  <img src="src/assets/images/logo-vdq.png" width="90" alt="Visão de Quadra logo">
</p>
<h1 align="center">🏀 Visão de Quadra (VdQ) — client-quiz</h1>
 
<p align="center">
  <i>🇧🇷 Quiz interativo sobre basquete — projeto acadêmico desenvolvido na ETEC CT.</i><br/>
  <i>🇺🇸 Interactive basketball quiz — academic project developed at ETEC CT.</i>
</p>
<p align="center">
  <a href="#-português">🇧🇷 Português</a> •
  <a href="#-english">🇺🇸 English</a>
</p>
<p align="center">
  <img alt="status" src="https://img.shields.io/badge/status-em%20desenvolvimento-FFC107?style=plastic">
  <img alt="license" src="https://img.shields.io/github/license/yoBiro/client-quiz?style=plastic&color=blue">
  <img alt="academic project" src="https://img.shields.io/badge/projeto-acad%C3%AAmico%20%7C%20ETEC%20CT-6f42c1?style=plastic">
</p>
<p align="center">
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=plastic&logo=html5&logoColor=white">
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=plastic&logo=css3&logoColor=white">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=plastic&logo=javascript&logoColor=black">
  <img alt="Tailwind CSS v4" src="https://img.shields.io/badge/Tailwind_CSS_v4-38BDF8?style=plastic&logo=tailwindcss&logoColor=white">
  <img alt="Web Components" src="https://img.shields.io/badge/Web_Components-29ABE2?style=plastic&logo=webcomponentsdotorg&logoColor=white">
</p>
<p align="center">
  <img alt="Node.js (em breve)" src="https://img.shields.io/badge/Node.js-lightgrey?style=plastic&logo=node.js&logoColor=339933">
  <img alt="MySQL (em breve)" src="https://img.shields.io/badge/MySQL-lightgrey?style=plastic&logo=mysql&logoColor=4479A1">
</p>
<p align="center"><sub>🔘 PT: em cinza — tecnologias planejadas para o back-end &nbsp;|&nbsp; EN: in grey — backend tech planned next</sub></p>
<p align="center">
  <img alt="last commit" src="https://img.shields.io/github/last-commit/yoBiro/client-quiz?style=plastic">
  <img alt="top language" src="https://img.shields.io/github/languages/top/yoBiro/client-quiz?style=plastic">
  <img alt="repo size" src="https://img.shields.io/github/repo-size/yoBiro/client-quiz?style=plastic">
  <img alt="issues" src="https://img.shields.io/github/issues/yoBiro/client-quiz?style=plastic">
  <img alt="stars" src="https://img.shields.io/github/stars/yoBiro/client-quiz?style=plastic">
</p>
---
 
## 🇧🇷 Português
 
### 📖 Sobre o projeto
 
**Visão de Quadra (VdQ)** é um quiz interativo sobre basquete, desenvolvido como projeto acadêmico na **ETEC CT**. A proposta é colocar em prática conceitos de Front-End moderno — Web Components nativos, Shadow DOM e Tailwind CSS — e, na próxima etapa, evoluir para uma aplicação full stack com Back-End próprio.
 
Atualmente o repositório contém a base de Front-End (Home, componentes reutilizáveis, tela de registro e tela de perfil). O Back-End com **Node.js** e **MySQL** está em planejamento e será adicionado em breve.
 
### 📸 Preview
 
<p align="center">
  <img src="https://placehold.co/800x450/1a1a1a/ffffff?text=Preview+em+breve" width="700" alt="Preview do projeto (placeholder)">
</p>
<!-- TODO: substituir a imagem acima pelos prints/GIF reais do projeto (Home, Registro, Perfil, Quiz) -->
 
### ✅ Funcionalidades / Roadmap
 
**Já implementado**
- [x] Estrutura de componentes reutilizáveis via Web Components (Custom Elements + Shadow DOM)
- [x] Estilização com Tailwind CSS v4 + CSS tokens e animações próprias
- [x] Landing page (Home) com hero e navegação
- [x] Tela de Registro (UI) com inputs customizados (texto, e-mail, senha, data, select, radio)
- [x] Tela de Perfil (UI)
**Em desenvolvimento / planejado**
- [ ] Lógica do Quiz (perguntas, respostas e pontuação)
- [ ] **Back-end em Node.js** com API REST
- [ ] Banco de dados **MySQL** (usuários, perguntas, histórico de pontuação)
- [ ] Integração das telas de Registro/Perfil com o Back-end
- [ ] Autenticação de usuários
- [ ] Ranking / histórico de partidas
- [ ] Deploy (Front-end + Back-end)
### 🧰 Tecnologias utilizadas
 
**Front-end (atual)**
- HTML5
- CSS3 + Tailwind CSS v4
- JavaScript (ES Modules)
- Web Components nativos (Custom Elements + Shadow DOM)
- CSS Module Scripts (`import sheet from './arquivo.css' with { type: 'css' }`)
**Back-end (planejado)**
- Node.js
- MySQL
### 📁 Estrutura do projeto
 
```
client-quiz/
├── src/
│   ├── assets/images/        # Logo e imagens da Home
│   ├── components/           # Web Components (botões, inputs, navbar)
│   │   ├── button/
│   │   ├── inputs/
│   │   └── nav/
│   ├── pages/
│   │   ├── auth/              # Registro
│   │   └── profile/            # Perfil
│   ├── styles/                # globals, tokens, animações, hero, output (Tailwind)
│   └── main.js                 # Ponto de entrada — registra os componentes
├── index.html                  # Home
├── package.json
└── README.md
```
 
### ▶️ Como executar localmente
 
**Pré-requisitos:**
- [Node.js](https://nodejs.org/) 18+
- Navegador baseado em Chromium atualizado (Chrome/Edge 123+) — o projeto usa **CSS Module Scripts** nativos, ainda não suportados em todos os navegadores
```bash
# 1. Clone o repositório
git clone https://github.com/yoBiro/client-quiz.git
cd client-quiz
 
# 2. Instale as dependências (Tailwind CSS)
npm install
 
# 3. Compile o CSS do Tailwind (modo watch)
npm run dev
 
# 4. Em outro terminal, sirva os arquivos estáticos, por exemplo:
npx serve .
# ou use a extensão "Live Server" do VS Code
```
 
> ⚠️ **Importante:** como o projeto importa CSS com `import ... with { type: 'css' }`, ele precisa ser servido via HTTP(s). Abrir o `index.html` direto pelo `file://` não funciona.
 
### 👥 Equipe
 
<table align="center">
  <tr>
    <td align="center">
      <a href="https://github.com/yoBiro">
        <img src="https://github.com/yoBiro.png" width="90" alt="yoBiro"><br>
        <sub><b>@yoBiro</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/dann473">
        <img src="https://github.com/dann473.png" width="90" alt="dann473"><br>
        <sub><b>@dann473</b></sub>
      </a>
    </td>
  </tr>
</table>
### 📄 Licença
 
Distribuído sob a licença **MIT**. Veja o arquivo [`LICENSE`](./LICENSE) para mais detalhes.
 
---
 
## 🇺🇸 English
 
### 📖 About the project
 
**Visão de Quadra (VdQ)** is an interactive basketball quiz, built as an academic project at **ETEC CT**. The goal is to practice modern Front-End concepts — native Web Components, Shadow DOM and Tailwind CSS — and, in the next stage, evolve into a full-stack application with its own Back-end.
 
The repository currently holds the Front-end foundation (Home page, reusable components, registration screen and profile screen). A **Node.js** + **MySQL** Back-end is planned and will be added soon.
 
### 📸 Preview
 
<p align="center">
  <img src="https://placehold.co/800x450/1a1a1a/ffffff?text=Preview+coming+soon" width="700" alt="Project preview (placeholder)">
</p>
<!-- TODO: replace the image above with real screenshots/GIF (Home, Register, Profile, Quiz) -->
> 🛠️ Placeholder — once the screens are more complete, swap the image above for real screenshots/GIFs (suggested folder: `docs/preview/`).
 
### ✅ Features / Roadmap
 
**Already implemented**
- [x] Reusable component architecture via Web Components (Custom Elements + Shadow DOM)
- [x] Styling with Tailwind CSS v4 + custom CSS tokens and animations
- [x] Landing page (Home) with hero section and navigation
- [x] Registration screen (UI) with custom inputs (text, email, password, date, select, radio)
- [x] Profile screen (UI)
**In progress / planned**
- [ ] Quiz logic (questions, answers and scoring)
- [ ] **Node.js back-end** with a REST API
- [ ] **MySQL** database (users, questions, score history)
- [ ] Wiring the Register/Profile screens to the Back-end
- [ ] User authentication
- [ ] Leaderboard / match history
- [ ] Deployment (Front-end + Back-end)
### 🧰 Tech stack
 
**Front-end (current)**
- HTML5
- CSS3 + Tailwind CSS v4
- JavaScript (ES Modules)
- Native Web Components (Custom Elements + Shadow DOM)
- CSS Module Scripts (`import sheet from './file.css' with { type: 'css' }`)
**Back-end (planned)**
- Node.js
- MySQL
### 📁 Project structure
 
```
client-quiz/
├── src/
│   ├── assets/images/        # Logo and Home images
│   ├── components/           # Web Components (buttons, inputs, navbar)
│   │   ├── button/
│   │   ├── inputs/
│   │   └── nav/
│   ├── pages/
│   │   ├── auth/              # Registration
│   │   └── profile/            # Profile
│   ├── styles/                # globals, tokens, animations, hero, output (Tailwind)
│   └── main.js                 # Entry point — registers the components
├── index.html                  # Home
├── package.json
└── README.md
```
 
### ▶️ Running locally
 
**Requirements:**
- [Node.js](https://nodejs.org/) 18+
- An up-to-date Chromium-based browser (Chrome/Edge 123+) — the project uses native **CSS Module Scripts**, which aren't supported by every browser yet
```bash
# 1. Clone the repository
git clone https://github.com/yoBiro/client-quiz.git
cd client-quiz
 
# 2. Install dependencies (Tailwind CSS)
npm install
 
# 3. Compile Tailwind's CSS (watch mode)
npm run dev
 
# 4. In another terminal, serve the static files, e.g.:
npx serve .
# or use VS Code's "Live Server" extension
```
 
> ⚠️ **Important:** since the project imports CSS via `import ... with { type: 'css' }`, it must be served over HTTP(s). Opening `index.html` directly via `file://` won't work.
 
### 👥 Team
 
<table align="center">
  <tr>
    <td align="center">
      <a href="https://github.com/yoBiro">
        <img src="https://github.com/yoBiro.png" width="90" alt="yoBiro"><br>
        <sub><b>@yoBiro</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/dann473">
        <img src="https://github.com/dann473.png" width="90" alt="dann473"><br>
        <sub><b>@dann473</b></sub>
      </a>
    </td>
  </tr>
</table>
### 📄 License
 
Distributed under the **MIT** license. See [`LICENSE`](./LICENSE) for details.