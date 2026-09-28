import { cadastrarUsuario } from "../../scripts/api/client.js"

let form = document.querySelector('.form')

form.addEventListener('submit', getData)

async function getData(event) {
    event.preventDefault() // Impede a página de recarregar 

    
    let user = {
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
        birthdate: form.birthdate.value,
        gender: form.gender.value,
        state: form.state.value
    }

   
    const botao = document.getElementById('botao-registrar');
    if (botao) {
        botao.disabled = true;
        botao.innerText = "Cadastrando...";
    }

   
    const sucesso = await enviarDados(user);

  
    if (sucesso) {
        location.href = '../profile/profile.html';
    } else {
        if (botao) {
            botao.disabled = false;
            botao.innerText = "Registrar";
        }
    }
}


async function enviarDados(dados) {
    let url = "http://localhost:3000/createUser"

    let object = {
        'nome_usuario': dados.name, 
        'email_usuario': dados.email,
        'senha_usuario': dados.password, 
        'data_nascimento_usuario': dados.birthdate, 
        'estado_usuario': dados.state,
        'sexo_usuario': dados.gender,
        'criado_em': new Date().toISOString().slice(0, 19).replace('T', ' ')
    }

    const options = { 
        method: "POST", 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(object) 
    }

    try {
        let resp = await fetch(url, options)
        
        if (!resp.ok) {
            throw new Error(`Erro no servidor: ${resp.status}`);
        }

        let dados = await resp.json()
        console.log("Resposta do servidor:", dados)
        alert("Usuário cadastrado com sucesso!")
        return true; // Retorna true para o fluxo saber que deu certo
        
    } catch (error) {
        console.error("Erro ao enviar requisição:", error)
        alert("Não foi possível conectar ao servidor ou salvar os dados.");
        return false; // Retorna false se falhar
    }
}
