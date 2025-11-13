const container = document.getElementById('createContainer')

let currentStep = 1
let selectedClan = null
let selectedPredator = null

// Clan to Discipline mapping
const clanDisciplines = {
    'brujah': ['potence', 'presence', 'celerity'],
    'gangrel': ['animalism', 'fortitude', 'protean'],
    'malkavian': ['auspex', 'dominate', 'obfuscate'],
    'nosferatu': ['animalism', 'obfuscate', 'potence'],
    'toreador': ['auspex', 'celerity', 'presence'],
    'tremere': ['auspex', 'blood-sorcery', 'dominate'],
    'ventrue': ['dominate', 'fortitude', 'presence'],
    'banu-haqim': ['blood-sorcery', 'celerity', 'obfuscate'],
    'caitiff': ['potence', 'presence', 'celerity', 'obfuscate', 'blood-sorcery', 'auspex', 'fortitude', 'protean', 'dominate', 'oblivion', 'animalism', 'blood-resonance', 'thin-blood-alchemy'],
    'hecata': ['auspex', 'fortitude', 'oblivion'],
    'lasombra': ['dominate', 'oblivion', 'potence'],
    'ministry': ['obfuscate', 'presence', 'protean'],
    'ravnos': ['animalism', 'obfuscate', 'presence'],
    'tzimisce': ['animalism', 'auspex', 'protean']
}

const clanDescriptions = {
    'brujah': 'Once philosopher-kings of an ancient civilization, but now rebels and rogues with a fearsome inclination toward frenzy.',
    'gangrel': 'Bestial and untamed, often coming to resemble the animals over which they demonstrate mastery.',
    'malkavian': 'A clan fractured by madness, each member irrevocably suffering under the yoke of insanity.',
    'nosferatu': 'Hideously disfigured by the Embrace, so they keep to the sewers shadows and traffic in the secrets they collect.',
    'toreador': 'Cainites that enjoy every sensual pleasure the world has to offer, idolizing physical beauty and the adoration of their thralls.',
    'tremere': 'Vampiric sorcerers that wield the supernatural power of their past as a hermetic house, though they became vampires through treachery and artifice.',
    'ventrue': 'Observe the noblesse oblige of vampire society, though their entitlement and greed encourages them to seek ever more at the expense of others.',
    'banu-haqim': 'Silent masters of assassination, killing for hire and collecting blood for rituals to bring them closer to their progenitor.',
    'caitiff': 'The most common term used by kindred to describe a vampire of an unknown clan, or of no clan at all.',
    'hecata': 'An insular, extended family of vampires who practice the art of commanding the dead while commanding global finances',
    'lasombra': 'Proud nobles who command the very essence of darkness and shadow — to the point of worshipping it, some say.',
    'ministry': 'A religious movement that evangelizes the example of a chthonic god, while seeking out the world’s secret places and protecting ancient artifacts.',
    'ravnos': 'Nomads and tricksters who can force the mind to see what isn’t there, though they are slaves to the vices they indulge in.',
    'tzimisce': 'Eldritch Old World lords who have little in common with the mortal world and can manipulate flesh and bone at a whim.'
}

const clanBanes = {
    'brujah': 'test',
    'gangrel': 'test',
    'malkavian': 'test',
    'nosferatu': 'test',
    'toreador': 'test',
    'tremere': 'test',
    'ventrue': 'test',
    'banu-haqim': 'test',
    'caitiff': 'test',
    'hecata': 'test',
    'lasombra': 'test',
    'ministry': 'test',
    'ravnos': 'test',
    'tzimisce': 'test'
}

// Initialize full tracker container for each container instance
function initializeTracker(container) {
    const trackerContainer = container.querySelector('.tracker-buttons')
    const decButton = container.querySelector('.decrement-btn')

    let count = 0
    const MAX = 5

    // Initialize tracker dots in DOM
    function initializeDots() {
        for(let i = 0; i < MAX; i++) {
            const dot = document.createElement('button')
            dot.classList.add('dot')
            dot.id = `dot-${i}`
            trackerContainer.appendChild(dot)
        }
        updateDots()
    }

    // Update appearance of dots in the DOM
    function updateDots() {
        const dots = trackerContainer.children
        for (let i = 0; i < MAX; i++) {
            if (i < count) {
                dots[i].classList.add('active')
            } else {
                dots[i].classList.remove('active')
            }
        }
    }

    // Click event on dots handler
    function incrementTracker() {
        if (count < MAX) {
            count++
            updateDots()
        }
    }

    function decrementTracker() {
        if (count > 0) {
            count--
            updateDots()
        }
    }

    initializeDots()
    updateDots()
    trackerContainer.addEventListener("click", incrementTracker)
    decButton.addEventListener("click", decrementTracker)
}

document.addEventListener('DOMContentLoaded', function() {
    
    // Set background styling for accordion container
    if (container) {
        const imageUrl = container.dataset.backgroundImage
        container.style.backgroundImage = `url('${imageUrl}')`
        container.style.backgroundSize = 'cover'
        container.style.backgroundAttachment = 'fixed'
        container.style.backgroundBlendMode = 'overlay'
    }

    // Tracker initialization on page load
    const trackers = document.querySelectorAll(".tracker-button-group")
    trackers.forEach(tracker => {
        initializeTracker(tracker)
    })

    // Initialize image upload
    const imageInput = document.getElementById('characterImage')
    const imagePreview = document.getElementById('imagePreview')
    
    if (imageInput && imagePreview) {
        imagePreview.addEventListener('click', () => imageInput.click())
        
        imageInput.addEventListener('change', function(e) {
            const file = e.target.files[0]
            if (file) {
                const reader = new FileReader()
                reader.onload = function(e) {
                    imagePreview.innerHTML = `<img src="${e.target.result}" alt="Character preview" style="max-width: 100%; max-height: 200px; border-radius: 4px;">`
                }
                reader.readAsDataURL(file)
            }
        })
    }

    // Initialize clan selection
    const clanOptions = document.querySelectorAll('.clan-option')
    clanOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove active class from all options
            clanOptions.forEach(opt => opt.classList.remove('active'))
            // Add active class to selected option
            this.classList.add('active')
            
            selectedClan = this.dataset.clan
            const clanName = this.querySelector('.clan-name').textContent
            
            // Show clan details section
            const clanDetails = document.getElementById('clanDetails')
            const selectedClanName = document.getElementById('selectedClanName')
            const step2Submit = document.getElementById('step2Submit')
            
            if (clanDetails && selectedClanName) {
                selectedClanName.textContent = clanName
                clanDetails.style.display = 'block'
                step2Submit.style.display = 'block'
            }

            // Update disciplines based on clan selection
            updateDisciplinesForClan(selectedClan)
        })
    })

    // Initialize predator selection
    const predatorOptions = document.querySelectorAll('.predator-option')
    predatorOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove active class from all options
            predatorOptions.forEach(opt => opt.classList.remove('active'))
            // Add active class to selected option
            this.classList.add('active')
            selectedPredator = this.dataset.predator
        })
    })
})

// Update disciplines visibility based on selected clan
function updateDisciplinesForClan(clan) {
    const disciplines = document.querySelectorAll('.discipline-item')
    const clanDisciplineList = clanDisciplines[clan] || []
    
    disciplines.forEach(item => {
        const trackerGroup = item.querySelector('.tracker-button-group')
        
        if (trackerGroup) {
            const disciplineName = trackerGroup.dataset.name
            if (disciplineName && clanDisciplineList.includes(disciplineName)) {
                item.classList.add('clan-discipline')
            } else {
                item.classList.remove('clan-discipline')
            }
        }
    })
}

function updateDescriptionsForClan(clan) {
    const descriptionText = clanDescriptions[clan]
    
    const info = document.getElementById('clanInfo')

    info.textContent = descriptionText
}

document.querySelectorAll('.clan-option').forEach(option => {
    option.addEventListener('click', function() {
        const selectedClanName = this.getAttribute('data-clan')
        updateDescriptionsForClan(selectedClanName)
    })
})

// Toggle box (accordion functionality)
window.toggleBox = function(step) {
    const box = document.getElementById(`step-${step}`)
    if (!box) return

    const isActive = box.classList.contains('active')
    
    // If clicking the active box, collapse it
    if (isActive) {
        box.classList.remove('active')
        updateLegendStep(step, false)
    } else {
        // Close all boxes
        document.querySelectorAll('.creator-box').forEach(b => {
            b.classList.remove('active')
        })
        
        // Open the clicked box
        box.classList.add('active')
        currentStep = step
        updateLegendStep(step, true)
        
        // Scroll to the box
        box.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
}

// Navigate to specific step from legend
window.navigateToStep = function(step) {
    // Close all boxes
    document.querySelectorAll('.creator-box').forEach(b => {
        b.classList.remove('active')
    })
    
    // Remove active from all legend steps
    document.querySelectorAll('.legend-step').forEach(ls => {
        ls.classList.remove('active')
    })
    
    // Open the selected box
    const box = document.getElementById(`step-${step}`)
    if (box) {
        box.classList.add('active')
        currentStep = step
        updateLegendStep(step, true)
        
        // Scroll to the box
        box.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
}

// Update legend step state
function updateLegendStep(step, isActive) {
    const legendStep = document.querySelector(`.legend-step[data-step="${step}"]`)
    if (!legendStep) return
    
    if (isActive) {
        legendStep.classList.add('active')
    } else {
        const wasActive = legendStep.classList.contains('active')
        legendStep.classList.remove('active')
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
        // Close all boxes first
        document.querySelectorAll('.creator-box').forEach(b => {
            b.classList.remove('active')
        })
        
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

// Validate step before proceeding
function validateStep(step) {
    switch(step) {
        case 1:
            const name = document.getElementById('characterName')
            const age = document.getElementById('characterAge')
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
            if (!selectedClan) {
                alert('Please select a clan')
                return false
            }
            return true
        case 5:
            if (!selectedPredator) {
                alert('Please select a predator type')
                return false
            }
            return true
        default:
            return true
    }
}

// Add specialty row
window.addSpecialty = function() {
    const container = document.getElementById('specialtiesContainer')
    if (!container) return

    const newSpecialty = document.createElement('div')
    newSpecialty.className = 'specialty-item'
    newSpecialty.innerHTML = `
        <select class="specialty-skill-select">
            <option value="">Select Skill</option>
            <option value="athletics">Athletics</option>
            <option value="brawl">Brawl</option>
            <option value="craft">Craft</option>
            <option value="drive">Drive</option>
            <option value="firearms">Firearms</option>
            <option value="larceny">Larceny</option>
            <option value="melee">Melee</option>
            <option value="stealth">Stealth</option>
            <option value="survival">Survival</option>
            <option value="animal-ken">Animal Ken</option>
            <option value="etiquette">Etiquette</option>
            <option value="insight">Insight</option>
            <option value="intimidation">Intimidation</option>
            <option value="leadership">Leadership</option>
            <option value="performance">Performance</option>
            <option value="persuasion">Persuasion</option>
            <option value="streetwise">Streetwise</option>
            <option value="subterfuge">Subterfuge</option>
            <option value="academics">Academics</option>
            <option value="awareness">Awareness</option>
            <option value="finance">Finance</option>
            <option value="investigation">Investigation</option>
            <option value="medicine">Medicine</option>
            <option value="occult">Occult</option>
            <option value="politics">Politics</option>
            <option value="science">Science</option>
            <option value="technology">Technology</option>
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