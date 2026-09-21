let url = "http://localhost:3000/createUser"



let nome = sessionStorage.getItem('name') 
let email = sessionStorage.getItem('email') 
let dataNasc = sessionStorage.getItem('birthdate')
let estado = sessionStorage.getItem('state')
let genero = sessionStorage.getItem('gender')

// let object = {
//     'nome': "João Almeida", 
//     'email': "joaogay@gmail.com"
// }

const options = { 
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }, 
        method: "POST", 
        body: JSON.stringify(object) 
}

let resp = await fetch(url, options)
let dados = await resp.json()
