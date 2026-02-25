import { SELECTORS, TRACKER_CONFIG } from './dataLoader.js'

// Initialize full tracker container for each container instance
function initializeTracker(container) {
    const trackerContainer = container.querySelector(SELECTORS.trackerButtons)
    const decButton = container.querySelector(SELECTORS.decrementButton)

    let count = 0
    const MAX = TRACKER_CONFIG.maxDots

    // Initialize tracker dots in DOM
    function initializeDots() {
        for(let i = 0; i < MAX; i++) {
            const dot = document.createElement(SELECTORS.button)
            dot.classList.add(SELECTORS.dot)
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

    // Click events on dots handler
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

export { initializeTracker }