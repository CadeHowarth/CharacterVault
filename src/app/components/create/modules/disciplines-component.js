import { h } from 'preact'
import htm from 'htm'

const html = htm.bind(h)

const disciplines = [
    'animalism',
    'auspex',
    'blood-sorcery',
    'celerity',
    'dominate',
    'fortitude',
    'obfuscate',
    'potence',
    'presence',
    'protean',
    'oblivion',
    'thin-blood-alchemy',
    'blood-resonance'
]

const toLabel = (value) => value
    .split('-')
    .map(v => v.charAt(0).toUpperCase() + v.slice(1))
    .join(' ')

export const DisciplinesComp = () => {
    return html`
        <div class="disciplines-container" id="disciplinesContainer">
            ${disciplines.map(name => html`
                <div class="discipline-item">
                    <label>${toLabel(name)}</label>
                    <div class="tracker-button-group" data-type="discipline" data-name="${name}">
                        <div class="tracker-buttons"></div>
                        <button type="button" class="decrement-btn">−</button>
                    </div>
                </div>
            `)}
        </div>
    `
}
