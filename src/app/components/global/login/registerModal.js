const registerConfirmButton = document.getElementById('register-confirm')
const registerModal = document.getElementById('register-modal')
const regUsername = document.getElementById('register-username')
const regPassword = document.getElementById('register-password')
const emailInput = document.getElementById('register-email')
const confPassword = document.getElementById('confirm-password')
const regUsernameError = document.getElementById('reg-username-error')
const regPasswordError = document.getElementById('reg-password-error')
const emailError = document.getElementById('email-error')
const regPasswordConfError = document.getElementById('reg-password-conf-error')
const modalBackdrop = document.getElementById('modal-backdrop')

import { REGISTER_MUTATION } from '../../../graphql/users/mutations/createUser.js'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

regUsername.addEventListener('input', () => {
    if (regUsername.validity.valid) {
        regUsernameError.innerHTML = ''
        regUsernameError.classList.remove('active')
        regUsername.classList.remove('invalid')
    } else {
        showEmptyError()
    }
})

regPassword.addEventListener('input', () => {
    if (regPassword.validity.valid) {
        regPasswordError.innerHTML = ''
        regPasswordError.classList.remove('active')
        regPassword.classList.remove('invalid')
    } else {
        showEmptyError()
    }
})

emailInput.addEventListener('input', () => {
    if (emailInput.validity.valid) {
        emailError.innerHTML = ''
        emailError.classList.remove('active')
        emailInput.classList.remove('invalid')
    } else {
        showEmptyError()
    }
})

confPassword.addEventListener('input', () => {
    if (confPassword.validity.valid) {
        regPasswordConfError.innerHTML = ''
        regPasswordConfError.classList.remove('active')
        confPassword.classList.remove('invalid')
    } else {
        showEmptyError()
    }
})
function showEmptyError() {
    if (regUsername.validity.valueMissing) {
        regUsernameError.innerHTML = 'This field is required (You cannot leave this field blank)'
        regUsernameError.classList.add('active')
        regUsername.classList.add('invalid')
    } else {
        regUsernameError.innerHTML = ''
        regUsernameError.classList.remove('active')
        regUsername.classList.remove('invalid')
    }

    if (regPassword.validity.valueMissing) {
        regPasswordError.innerHTML = 'This field is required (You cannot leave this field blank)'
        regPasswordError.classList.add('active')
        regPassword.classList.add('invalid') 
    } else {
        regPasswordError.innerHTML = ''
        regPasswordError.classList.remove('active')
        regPassword.classList.remove('invalid') 
    }

    if (emailInput.validity.valueMissing) {
        emailError.innerHTML = 'This field is required (You cannot leave this field blank)'
        emailError.classList.add('active')
        emailInput.classList.add('invalid') 
    } else {
        emailError.innerHTML = ''
        emailError.classList.remove('active')
        emailInput.classList.remove('invalid')  
    }

    if (confPassword.validity.valueMissing) {
        regPasswordConfError.innerHTML = 'This field is required (You cannot leave this field blank)'
        regPasswordConfError.classList.add('active')
        confPassword.classList.add('invalid')
    } else {
        regPasswordConfError.innerHTML = ''
        regPasswordConfError.classList.remove('active')
        confPassword.classList.remove('invalid')
    }
}

confPassword.addEventListener('input', () => {
  if (confPassword.value !== regPassword.value) {
    regPasswordConfError.classList.add('active')
    confPassword.classList.add('invalid')
    regPasswordConfError.innerHTML = 'This password does not match previously entered password'
  } else {
    regPasswordConfError.innerHTML = ''
  }
})

emailInput.addEventListener('input', () => {
    if (!emailRegex.test(emailInput.value)) {
        emailError.innerHTML = `Email is not valid. Please Enter email addres with '@' and '.com'`
        emailError.classList.add('active')
        emailInput.classList.add('invalid') 
    } else {
        regPasswordConfError.innerHTML = ''
    }
})


registerConfirmButton.addEventListener('click', async (event) => {
    event.preventDefault()

    if (!regUsername.validity.valid || !regPassword.validity.valid || !emailInput.validity.valid || !confPassword.validity.valid) {
    showEmptyError()
    return
    } else if (confPassword.value !== regPassword.value) {
        return false
    } else if (!emailRegex.test(emailInput.value)) {
        return false
    }

    const username = regUsername.value
    const password = regPassword.value
    const email = emailInput.value

    regUsernameError.innerHTML = ''
    regPasswordError.innerHTML = ''
    emailError.innerHTML = ''

    try {
        const response = await fetch('/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: REGISTER_MUTATION,
                variables: { username, email, password },
            }),
        })

        const result = await response.json()

        if (result.errors) {
            console.error(result.errors)
            return
        }

        const { token, user } = result.data.createUser
        localStorage.setItem('auth_token', token)
        window.location.reload()

    } catch (error) {
        console.error('User Creation failed:', error)
    }
})