import { SELECTORS } from './dataLoader.js'

let configDescriptions = null
let configDisciplines = null
let configBanes = null
let configDescBox = null

export function initData({ configDescriptions: d, configDisciplines: dis, configBanes: b, configDescBox: db }) {
    configDescriptions = d
    configDisciplines = dis
    configBanes = b
    configDescBox = db
}

export function closeAllBoxes() {
    document.querySelectorAll(SELECTORS.creatorBox).forEach(box => box.classList.remove('active'))
    document.querySelectorAll(SELECTORS.legendStep).forEach(ls => ls.classList.remove('active'))
}

export function openBox(step) {
    const box = document.getElementById(`step-${step}`)

    if (box) {
        box.classList.add('active')
        updateLegendStep(step, true)
        box.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
}

function setActiveInGroup(selector, el) {
    document.querySelectorAll(selector).forEach(o => o.classList.remove('active'))
    el.classList.add('active')
}

export function setupOptionGroup(selector, onSelect) {
    const nodes = document.querySelectorAll(selector)
    if (!nodes || nodes.length === 0) return
    nodes.forEach(el => {
        el.addEventListener('click', function() {
            setActiveInGroup(selector, this)
            if (typeof onSelect === 'function') onSelect(this)
        })
    })
}

export function updateDisciplinesForClan(clan) {
    const disciplines = document.querySelectorAll(SELECTORS.disciplineItem)
    const clanDisciplineList = (configDisciplines.clanDisciplines[clan]) || []
    
    disciplines.forEach(item => {
        const trackerGroup = item.querySelector(SELECTORS.trackerButtonGroup)
        
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

export function updateDescriptionsForClan(clan) {
    const descriptionText = (configDescriptions.clanDescriptions[clan].description) || "No description available for this clan."
    
    const info = document.getElementById(SELECTORS.clanInfo)

    info.textContent = descriptionText
}

export function updateAsideText(stepNum) {
    const descBoxHeaderText = (configDescBox.asideText.description.header[stepNum]) || ''
    const descBoxContentText = (configDescBox.asideText.description.content[stepNum]) || ''

    const asideHeaderText = document.getElementById(SELECTORS.purposeHeader)
    const asideContentText = document.getElementById(SELECTORS.purposeText)

    asideHeaderText.textContent = descBoxHeaderText
    asideContentText.textContent = descBoxContentText
}

export function updateSelectionText(selector) {
    const selectionBoxContentText = (configDescBox.asideText.selection.content[selector]) || ''

    const selectionHeaderText = document.getElementById(SELECTORS.selectionHeader)
    const selectionContentText = document.getElementById(SELECTORS.selectionText)

    if (typeof selectionBoxContentText === 'object' && selectionBoxContentText !== null) {
        let formattedContent = ''
        
        if (selectionBoxContentText.description) {
            formattedContent += selectionBoxContentText.description
        }
        
        if (selectionBoxContentText.levels && Array.isArray(selectionBoxContentText.levels)) {
            formattedContent += '\n\n' + selectionBoxContentText.levels.join('\n')

            selectionHeaderText.textContent = selectionBoxContentText.header || configDescBox.asideText.selection.header[selector] || ''
            selectionContentText.textContent = formattedContent
        } else {
            selectionHeaderText.textContent = selectionBoxContentText.header || configDescBox.asideText.selection.header[selector] || ''
            selectionContentText.textContent = selectionBoxContentText || ''
        }
    }
}

export function updateLegendStep(step, isActive) {
    const legendStep = document.querySelector(`.legend-step[data-step="${step}"]`)
    if (!legendStep) return
    
    if (isActive) {
        legendStep.classList.add('active')
    } else {
        legendStep.classList.remove('active')
    }
}

// Monitor click events on options containers
export function dataOptionsListener() {
    const dataOptionContainers = document.querySelectorAll(`[${SELECTORS.dataName}]`)
    
    if (!dataOptionContainers || dataOptionContainers.length === 0) {
        return
    }
    
    // Remember that this.dataset.name is the correct syntax, as SELECTORS.dataName is 'data-name', and dataset properties are accessed without the 'data-' prefix
    dataOptionContainers.forEach(container => {
        container.addEventListener('click', function(e) {
            const dataOpt = this.dataset.name
            if (dataOpt) {
                updateSelectionText(dataOpt)
            }
        })
    })
}