import { h } from 'preact'
import htm from 'htm'

const html = htm.bind(h)

const predators = [
    { key: 'alleycat', label: 'Alleycat' },
    { key: 'bagger', label: 'Bagger' },
    { key: 'blood-leech', label: 'Blood Leech' },
    { key: 'cleaver', label: 'Cleaver' },
    { key: 'consensualist', label: 'Consensualist' },
    { key: 'farmer', label: 'Farmer' },
    { key: 'osiris', label: 'Osiris' },
    { key: 'sandman', label: 'Sandman' },
    { key: 'scene-queen', label: 'Scene Queen' },
    { key: 'siren', label: 'Siren' }
]

export const PredatorTypeComp = () => {
    return html`
        <div class="predator-grid" id="predatorGrid">
            ${predators.map(predator => html`
                <div class="predator-option" data-predator="${predator.key}">
                    <span class="predator-name">${predator.label}</span>
                </div>
            `)}
        </div>
    `
}
