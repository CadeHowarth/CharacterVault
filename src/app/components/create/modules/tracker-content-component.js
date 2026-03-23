import { Fragment, h } from 'preact'
import htm from 'htm'

const html = htm.bind(h)

const trackerRow = ({ type, name, label, rowClass }) => html`
    <div class="${rowClass}">
        <label>${label}</label>
        <div class="tracker-button-group" data-type="${type}" data-name="${name}">
            <div class="tracker-buttons" data-value="0"></div>
            <button type="button" class="decrement-btn">−</button>
        </div>
    </div>
`

const skillOptions = [
    'athletics', 'brawl', 'craft', 'drive', 'firearms', 'larceny', 'melee', 'stealth', 'survival',
    'animal-ken', 'etiquette', 'insight', 'intimidation', 'leadership', 'performance', 'persuasion', 'streetwise', 'subterfuge',
    'academics', 'awareness', 'finance', 'investigation', 'medicine', 'occult', 'politics', 'science', 'technology'
]

const toLabel = (value) => value
    .split('-')
    .map(v => v.charAt(0).toUpperCase() + v.slice(1))
    .join(' ')

export const TrackerContentComp = () => {
    const attributeCategories = [
        { title: 'Physical', values: ['strength', 'dexterity', 'stamina'] },
        { title: 'Social', values: ['charisma', 'manipulation', 'composure'] },
        { title: 'Mental', values: ['intelligence', 'wits', 'resolve'] }
    ]

    const skillCategories = [
        { title: 'Physical', values: ['athletics', 'brawl', 'craft', 'drive', 'firearms', 'larceny', 'melee', 'stealth', 'survival'] },
        { title: 'Social', values: ['animal-ken', 'etiquette', 'insight', 'intimidation', 'leadership', 'performance', 'persuasion', 'streetwise', 'subterfuge'] },
        { title: 'Mental', values: ['academics', 'awareness', 'finance', 'investigation', 'medicine', 'occult', 'politics', 'science', 'technology'] }
    ]

    return html`
        <${Fragment}>
        <div class="attributes-section">
            <h5>Attributes</h5>
            <div class="attributes-container">
                ${attributeCategories.map(category => html`
                    <div class="attribute-category">
                        <h6>${category.title}</h6>
                        <div class="attribute-grid">
                            ${category.values.map(name => trackerRow({
                                type: 'attribute',
                                name,
                                label: toLabel(name),
                                rowClass: 'attribute-item'
                            }))}
                        </div>
                    </div>
                `)}
            </div>
        </div>

        <div class="skills-section">
            <h5>Skills</h5>
            <div class="skills-container">
                ${skillCategories.map(category => html`
                    <div class="skill-category">
                        <h6>${category.title}</h6>
                        <div class="skill-grid">
                            ${category.values.map(name => trackerRow({
                                type: 'skill',
                                name,
                                label: toLabel(name),
                                rowClass: 'skill-item'
                            }))}
                        </div>
                    </div>
                `)}
            </div>
        </div>

        <div class="specialties-section">
            <h5>Specialties</h5>
            <div class="specialties-container" id="specialtiesContainer">
                <div class="specialty-item">
                    <select class="specialty-skill-select">
                        <option value="">Select Skill</option>
                        ${skillOptions.map(skill => html`<option value="${skill}">${toLabel(skill)}</option>`)}
                    </select>
                    <input type="text" placeholder="Specialty name" class="specialty-name-input">
                </div>
            </div>
            <button type="button" class="add-specialty-btn" onclick="addSpecialty()">+ Add Specialty</button>
        </div>
        <//>
    `
}
