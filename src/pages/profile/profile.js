let user = JSON.parse(sessionStorage.getItem('user'))

console.log(user)

if (user) {
    let h1 = document.querySelectorAll('.h1-name')
    let spans = document.querySelectorAll('span')

    h1[0].textContent = user.name
    spans[0].textContent = user.email
    spans[1].textContent = user.birthdate
    spans[2].textContent = user.state 
    spans[3].textContent = user.gender
    
}
