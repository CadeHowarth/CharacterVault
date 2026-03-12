import { SELECTORS } from './dataLoader.js'

function validateStep(step) {
    switch(step) {
        case 1:
            const name = document.getElementById(SELECTORS.characterName)
            const age = document.getElementById(SELECTORS.characterAge)
            const sire = document.getElementById(SELECTORS.sireName)
            const gen = document.getElementById(SELECTORS.generation)
            if (!name || !name.value.trim()) {
                // alert('Please enter a character name')
                // return false
            }
            if (!age || !age.value) {
                // alert('Please select a character age')
                // return false
            }
            if (!sire || !sire.value.trim()) {
                // alert('Please enter a sire name')
                // return false
            }
            if (!gen || !gen.value.trim()) {
                // alert('Please enter the generation of your sire')
                // return false
            }
            return true
        case 2:
            const selectedClanEl = document.querySelector(`${SELECTORS.clanOption}.active`)
            if (!selectedClanEl) {
                // alert('Please select a clan')
                // return false
            }
            return true
        case 5:
            const selectedPredatorEl = document.querySelector(`${SELECTORS.predatorOption}.active`)
            if (!selectedPredatorEl) {
                // alert('Please select a predator type')
                // return false
            }
            return true
        default:
            return true
    }
}

const numericInput = document.getElementById(SELECTORS.generation)

numericInput.addEventListener('beforeinput', (e) => {
    const nextValue = e.target.value + (e.data || '')
    const regex = /^([2-9]|1[0-2]?)$/

    if (nextValue == '') return
        
    if (!regex.test(nextValue)) {
        e.preventDefault()
    }
})

export { validateStep }