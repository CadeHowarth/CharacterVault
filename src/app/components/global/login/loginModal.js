const loginButton = document.getElementById('login-btn')
const closeModalButton = document.getElementById('close-btn')
const loginModal = document.getElementById('login-modal-form')
const modalContainer = document.getElementById('login-modal')
const modalBackdrop = document.getElementById('modal-backdrop')
const usernameInput = document.getElementById('username')
const passwordInput = document.getElementById('password')
const usernameError = document.getElementById('username-error')
const passwordError = document.getElementById('password-error')

import { LOGIN_MUTATION } from '../../../graphql/users/mutations/login.js'

loginButton.addEventListener('click', () => {
    modalContainer.classList.remove('hidden')
    modalBackdrop.classList.remove('hidden')
    document.body.classList.add('modal-open')
})

closeModalButton.addEventListener('click', () => {
    loginModal.classList.add('hidden')
    modalBackdrop.classList.add('hidden')
    document.body.classList.remove('modal-open')
})

usernameInput.addEventListener('input', () => {
    if (usernameInput.validity.valid) {
        usernameError.innerHTML = ''
        usernameError.classList.remove('active')
        usernameInput.classList.remove('invalid')
    } else {
        showUsernameError()
    }
})

passwordInput.addEventListener('input', () => {
    if (passwordInput.validity.valid) {
        passwordError.innerHTML = ''
        passwordError.classList.remove('active')
        passwordInput.classList.remove('invalid')
    } else {
        showPasswordError()
    }
})

function showUsernameError() {
    if (usernameInput.validity.valueMissing) {
        usernameError.innerHTML = 'This field is required (You cannot leave this field blank)'
    } 
    usernameError.classList.add('active')
    usernameInput.classList.add('invalid')
}

function showPasswordError() {
    if (passwordInput.validity.valueMissing) {
        passwordError.innerHTML = 'This field is required (You cannot leave this field blank)'
    }
    passwordError.classList.add('active')
    passwordInput.classList.add('invalid')
}

loginModal.addEventListener('submit', async (event) => {
    event.preventDefault()

    if (!usernameInput.validity.valid) {
    showUsernameError()
    return
    } 
    
    if (!passwordInput.validity.valid) {
    showPasswordError()
    return
    }

    const username = usernameInput.value
    const password = passwordInput.value

    usernameError.innerHTML = ''
    passwordError.innerHTML = ''

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
            return
        }

        const { token, user } = result.data.loginUser
        localStorage.setItem('auth_token', token)

        console.log('Login successful', user.username)
        modalContainer.classList.add('hidden')
        modalContainer.style.display = 'none'
        modalBackdrop.classList.add('hidden')
        document.body.classList.remove('modal-open')

    } catch (error) {
        console.error('Login failed:', error)

    }
})