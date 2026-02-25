import { DATA_PATHS, SELECTORS, SKILLS } from './dataLoader.js'
import { validateStep } from './dataValidation.js'
import { setupOptionGroup, updateDisciplinesForClan, updateDescriptionsForClan, updateAsideText, updateLegendStep, closeAllBoxes, openBox, initData, updateSelectionText, dataOptionsListener } from './helpers.js'
import { initializeTracker } from './trackerModule.js'

let currentStep = 1

// ====== PAGE INITIALIZATION ======

function loadData() {
    return Promise.all([
        fetch(DATA_PATHS.descriptions).then(res => res.json()),
        fetch(DATA_PATHS.disciplines).then(res => res.json()),
        fetch(DATA_PATHS.banes).then(res => res.json()),
        fetch(DATA_PATHS.descBox).then(res => res.json())
    ]).then(([configDescriptions, configDisciplines, configBanes, configDescBox]) => {
        initData({ configDescriptions, configDisciplines, configBanes, configDescBox })
    })
}loadData()

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById(SELECTORS.createContainer)
    const trackers = document.querySelectorAll(SELECTORS.trackerButtonGroup)
    
    // Set background styling for accordion container
    if (container) {
        const imageUrl = container.dataset.backgroundImage
        container.style.backgroundImage = `url('${imageUrl}')`
        container.style.backgroundSize = 'cover'
        container.style.backgroundAttachment = 'fixed'
        container.style.backgroundBlendMode = 'overlay'
    }

    // Tracker initialization on page load
    trackers.forEach(tracker => {
        initializeTracker(tracker)
    })
})

// ====== STATE MANAGEMENT & UTILITY FUNCTIONS ======

setupOptionGroup(SELECTORS.clanOption, function(el) {
    const selectedClan = el.getAttribute(SELECTORS.dataClan)
    const clanNameEl = el.querySelector(SELECTORS.clanName)
    const clanName = clanNameEl ? clanNameEl.textContent : ''

    const clanDetails = document.getElementById(SELECTORS.clanDetails)
    const selectedClanName = document.getElementById(SELECTORS.selectedClanName)
    const step2Submit = document.getElementById(SELECTORS.stepTwo)

    if (clanDetails && selectedClanName) {
        selectedClanName.textContent = clanName
        clanDetails.style.display = 'block'
        step2Submit.style.display = 'block'
    }

    updateDisciplinesForClan(selectedClan)
    updateDescriptionsForClan(selectedClan)
})

setupOptionGroup(SELECTORS.predatorOption, function(el) {})

const observerOptions = {
    attributes: true,
    attributeFilter: ['class']
}

// MutationObserver to detect when a box is opened and update aside text content
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            const target = mutation.target
            const stepNum = target.id && target.id.split('-')[1]
            if (target.classList && target.classList.contains('active') && stepNum) {
                updateAsideText(stepNum)
            }
        }
    })
})

// Observe all elements that can trigger aside text updates (boxes and options)
function observeAllSelections() {
    const creatorTargets = document.querySelectorAll(SELECTORS.creatorBox)
    const optTargets = document.querySelectorAll(`[${SELECTORS.dataName}]`)
    if ((creatorTargets.length === 0) && (optTargets.length === 0)) return
    creatorTargets.forEach(t => observer.observe(t, observerOptions))
    optTargets.forEach(t => observer.observe(t, observerOptions))
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        observeAllSelections()
        dataOptionsListener()
    })
} else {
    observeAllSelections()
    dataOptionsListener()
}

// Accordion toggle box
window.toggleBox = function(step) {
    const box = document.getElementById(`step-${step}`)
    if (!box) return

    const isActive = box.classList.contains('active')

    // Validate current step only if moving forward
    if (step > currentStep && !validateStep(currentStep)) {
        return
    }
    
    // If clicking the active box, collapse it
    if (isActive) {
        closeAllBoxes()
        updateLegendStep(step, false)
    } else {
        closeAllBoxes()
        openBox(step)
    }
}

// Navigate to specific step from legend
window.navigateToStep = function(step) {
    const legendStep = document.querySelector(`.legend-step[data-step="${step}"]`)
    const isActive = legendStep.classList.contains('active')

    // Validate current step only if moving forward
    if (step > currentStep && !validateStep(currentStep)) {
        return
    }

    if (isActive) {
        closeAllBoxes()
    } else {
        closeAllBoxes()
        openBox(step)   
    }
}

// Submit step and move to next
window.submitStep = function(step) {
    const currentBox = document.getElementById(`step-${step}`)
    const nextBox = document.getElementById(`step-${step + 1}`)
    const currentLegend = document.querySelector(`.legend-step[data-step="${step}"]`)
    const nextLegend = document.querySelector(`.legend-step[data-step="${step + 1}"]`)

    // Validate current step
    if (!validateStep(step)) {
        return
    }

    // Mark current box as completed (but keep it visible)
    if (currentBox) {
        currentBox.classList.remove('active')
    }

    // Update legend
    if (currentLegend) {
        currentLegend.classList.remove('active')
    }

    // Open next box
    if (nextBox && step < 5) {
        closeAllBoxes()

        nextBox.classList.add('active')
        currentStep = step + 1
        
        // Scroll to next box
        nextBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }

    // Activate next legend step
    if (nextLegend) {
        nextLegend.classList.add('active')
    }
}

// Add specialty row
window.addSpecialty = function() {
    const container = document.getElementById(SELECTORS.specialtiesContainer)
    if (!container) return

    const newSpecialty = document.createElement('div')
    newSpecialty.className = 'specialty-item'

    const skillOptions = SKILLS.map(skill => `option value="${skill}">${skill}</option>`).join('')

    newSpecialty.innerHTML = `
        <select class="specialty-skill-select">
            <option value="">Select Skill</option>
            ${skillOptions}
        </select>
        <input type="text" placeholder="Specialty name" class="specialty-name-input">
        <button type="button" class="remove-specialty-btn" onclick="removeSpecialty(this)">×</button>
    `
    container.appendChild(newSpecialty)
}

// Remove specialty row
window.removeSpecialty = function(button) {
    button.parentElement.remove()
}