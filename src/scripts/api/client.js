export async function cadastrarUsuario() {
    let url = "http://localhost:3000/createUser"

    let nome = sessionStorage.getItem('name') 
    let email = sessionStorage.getItem('email') 
    let senha = sessionStorage.getItem('password')
    let dataNasc = sessionStorage.getItem('birthdate')
    let estado = sessionStorage.getItem('state')
    let genero = sessionStorage.getItem('gender')

    let object = {
        'nome_usuario': nome, 
        'email_usuario': email,
        'senha_usuario': senha, 
        'data_nascimento_usuario': dataNasc, 
        'estado_usuario': estado,
        'sexo_usuario': genero,
        'criado_em': new Date().toISOString() 
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
        
    } catch (error) {
        console.error("Erro ao enviar requisição:", error)
        alert("Não foi possível conectar ao servidor.")
    }
}
