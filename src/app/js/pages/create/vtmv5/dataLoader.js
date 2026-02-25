const DATA_PATHS = {
    descriptions: '../../content/data/vtmv5/descriptions.json',
    disciplines: '../../content/data/vtmv5/disciplines.json',
    banes: '../../content/data/vtmv5/banes.json',
    descBox: '../../content/data/vtmv5/descBox.json'
} 

const SELECTORS = {
    // Containers
    createContainer: 'createContainer',
    clanDetails: 'clanDetails',
    specialtiesContainer: 'specialtiesContainer',
    
    // Inputs
    characterName: 'characterName',
    characterAge: 'characterAge',
    characterImage: 'characterImage',

    // Attributes
    dataClan: 'data-clan',
    dataPredator: 'data-predator',
    dataName: 'data-name',
    
    // Elements by ID
    imagePreview: 'imagePreview',
    clanInfo: 'clanInfo',
    selectedClanName: 'selectedClanName',
    purposeHeader: 'purposeHeader',
    purposeText: 'purposeText',
    selectionHeader: 'selectionHeader',
    selectionText: 'selectionText',
    clansDetails: 'clansDetails',
    stepTwo: 'step2Submit',
    
    // Elements by class
    clanOption: '.clan-option',
    clanName: '.clan-name',
    predatorOption: '.predator-option',
    disciplineItem: '.discipline-item',
    creatorBox: '.creator-box',
    legendStep: '.legend-step',
    trackerButtonGroup: '.tracker-button-group',
    trackerButtons: '.tracker-buttons',
    decrementButton: '.decrement-btn',
    clanName: '.clan-name',

    // Dynamic elements
    button: 'button',
    dot: 'dot'
}

const DATA_KEYS = {
    clanDisciplines: 'clanDisciplines',
    clanDescriptions: 'clanDescriptions',
    asideText: 'asideText',
    description: 'description',
    header: 'header',
    content: 'content'
}

const TRACKER_CONFIG = {
    maxDots: 5,
    activeClass: 'active',
    dotClass: 'dot'
}

const TRACKER_STEPS = {
    TOTAL: 5,
    BASIC_INFO: 1,
    CLAN_SELECTION: 2,
    PREDATOR_SELECTION: 5
}

const SKILLS = [
    'athletics', 'brawl', 'craft', 'drive', 'firearms', 'larceny', 'melee', 'stealth', 'survival',
    'animal-ken', 'etiquette', 'insight', 'intimidation', 'leadership', 'performance', 'persuasion', 'streetwise', 'subterfuge',
    'academics', 'awareness', 'finance', 'investigation', 'medicine', 'occult', 'politics', 'science', 'technology'
]

export { DATA_PATHS, SELECTORS, DATA_KEYS, TRACKER_CONFIG, TRACKER_STEPS, SKILLS }