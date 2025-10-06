const loginButton = document.getElementById('login-btn')
const closeModalButton = document.getElementById('close-btn')
const loginModal = document.getElementById('login-modal')
const modalBackdrop = document.getElementById('modal-backdrop')

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
