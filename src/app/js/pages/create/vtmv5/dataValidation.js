import { SELECTORS } from './dataLoader.js'

function validateStep(step) {
    switch(step) {
        case 1:
            const name = document.getElementById(SELECTORS.characterName)
            const age = document.getElementById(SELECTORS.characterAge)
            if (!name || !name.value.trim()) {
                alert('Please enter a character name')
                return false
            }
            if (!age || !age.value) {
                alert('Please select a character age')
                return false
            }
            return true
        case 2:
            const selectedClanEl = document.querySelector(`${SELECTORS.clanOption}.active`)
            if (!selectedClanEl) {
                alert('Please select a clan')
                return false
            }
            return true
        case 5:
            const selectedPredatorEl = document.querySelector(`${SELECTORS.predatorOption}.active`)
            if (!selectedPredatorEl) {
                alert('Please select a predator type')
                return false
            }
            return true
        default:
            return true
    }
}

export { validateStep }