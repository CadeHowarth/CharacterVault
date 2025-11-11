const loginButton = document.getElementById('login-btn')
const loginModal = document.getElementById('login-modal')
const registerButton = document.getElementById('register-submit')
const registerModal = document.getElementById('register-modal')
const loginSubmitButton = document.getElementById('login-submit')
const closeLoginButton = document.getElementById('close-btn-login')
const closeRegButton = document.getElementById('close-btn-reg')
const modalBackdrop = document.getElementById('modal-backdrop')
const usernameInput = document.getElementById('username')
const passwordInput = document.getElementById('password')
const regUsername = document.getElementById('register-username')
const emailInput = document.getElementById('register-email')
const regPassword = document.getElementById('register-password')
const confPassword = document.getElementById('confirm-password')
const usernameError = document.getElementById('username-error')
const passwordError = document.getElementById('password-error')

import { LOGIN_MUTATION } from '../../../graphql/users/mutations/login.js'

loginButton.addEventListener('click', showLoginModal)

registerButton.addEventListener('click', showRegisterModal)

closeLoginButton.addEventListener('click', closeModal)

closeRegButton.addEventListener('click', closeModal)

usernameInput.addEventListener('input', () => {
    if (usernameInput.validity.valid) {
        usernameError.innerHTML = ''
        usernameError.classList.remove('active')
        usernameInput.classList.remove('invalid')
    } else {
        showEmptyError()
    }
})

passwordInput.addEventListener('input', () => {
    if (passwordInput.validity.valid) {
        passwordError.innerHTML = ''
        passwordError.classList.remove('active')
        passwordInput.classList.remove('invalid')
    } else {
        showEmptyError()
    }
})

function showEmptyError() {
    if (usernameInput.validity.valueMissing) {
        usernameError.innerHTML = 'This field is required (You cannot leave this field blank)'
    } 
    usernameError.classList.add('active')
    usernameInput.classList.add('invalid')

    if (passwordInput.validity.valueMissing) {
        passwordError.innerHTML = 'This field is required (You cannot leave this field blank)'
    } 
    passwordError.classList.add('active')
    passwordInput.classList.add('invalid')
}

loginSubmitButton.addEventListener('click', async (event) => {
    event.preventDefault()

    if (!usernameInput.validity.valid || !passwordInput.validity.valid) {
    showEmptyError()
    return
    } 

    const username = usernameInput.value
    const password = passwordInput.value

    try {
        const response = await fetch('/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: LOGIN_MUTATION,
                variables: { username, password },
            }),
        })

        const result = await response.json()

        if (result.errors) {
            console.error(result.errors)
            const err = result.errors[0].message
            usernameError.innerHTML = err
            usernameError.classList.add('active')
            usernameInput.classList.add('invalid')
            return
        }

        const { token, user } = result.data.loginUser
        localStorage.setItem('auth_token', token)

        console.log('Login successful', user.username)
        window.location.reload()

    } catch (error) {
        console.error('Login failed:', error)
    }
})

function showLoginModal() {
    loginModal.classList.remove('hidden')
    modalBackdrop.classList.remove('hidden')
    document.body.classList.add('modal-open')
}

function showRegisterModal() {
    loginModal.classList.add('hidden')
    registerModal.classList.remove('hidden')
}

function closeModal() {
    loginModal.classList.add('hidden')
    registerModal.classList.add('hidden')
    modalBackdrop.classList.add('hidden')

    usernameInput.value = ''
    passwordInput.value = ''
    regUsername.value = ''
    emailInput.value = ''
    regPassword.value = ''
    confPassword.value = ''

    document.body.classList.remove('modal-open')

}