let form = document.querySelector('.form')
form.addEventListener('submit', getData)


export function getData(event) {
    event.preventDefault()

    let user = {
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
        birthdate: form.birthdate.value,
        gender: form.gender.value,
        state: form.state.value
    }

    sessionStorage.setItem('user', JSON.stringify(user))

    location.href = '../profile/profile.html'
}