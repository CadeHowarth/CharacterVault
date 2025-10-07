const loginButton = document.getElementById('login-btn')
const closeModalButton = document.getElementById('close-btn')
const loginModal = document.getElementById('login-modal')
const modalBackdrop = document.getElementById('modal-backdrop')
const username = document.getElementById('username')
const password = document.getElementById('password')
const usernameError = document.getElementById('username-error')
const passwordError = document.getElementById('password-error')

loginButton.addEventListener('click', () => {
    loginModal.classList.remove('hidden')
    modalBackdrop.classList.remove('hidden')
    document.body.classList.add('modal-open')
})


closeModalButton.addEventListener('click', () => {
    loginModal.classList.add('hidden')
    modalBackdrop.classList.add('hidden')
    document.body.classList.remove('modal-open')
})

username.addEventListener('input', () => {
    if (username.validity.valid) {
        usernameError.innerHTML = ''
        usernameError.classList.remove('active')
        username.classList.remove('invalid')
    } else {
        showUsernameError()
    }
})

password.addEventListener('input', () => {
    if (password.validity.valid) {
        passwordError.innerHTML = ''
        passwordError.classList.remove('active')
        password.classList.remove('invalid')
    } else {
        showPasswordError()
    }
})

function showUsernameError() {
    if (username.validity.valueMissing) {
        usernameError.innerHTML = 'This field is required (You cannot leave this field blank)'
    } 
    usernameError.classList.add('active')
    username.classList.add('invalid')
}

function showPasswordError() {
    if (password.validity.valueMissing) {
        passwordError.innerHTML = 'This field is required (You cannot leave this field blank)'
    }
    passwordError.classList.add('active')
    password.classList.add('invalid')
}

loginModal.addEventListener("submit", (event) => {
  if (!username.validity.valid) {
    showUsernameError()
    event.preventDefault()
  } else if (!password.validity.valid) {
    showPasswordError()
    event.preventDefault()
  }
})