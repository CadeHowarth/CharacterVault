import { h } from 'preact'
import htm from 'htm'

const html = htm.bind(h)

const clanIconPath = 'M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z'

const clans = [
    { key: 'brujah', label: 'Brujah' },
    { key: 'gangrel', label: 'Gangrel' },
    { key: 'malkavian', label: 'Malkavian' },
    { key: 'nosferatu', label: 'Nosferatu' },
    { key: 'toreador', label: 'Toreador' },
    { key: 'tremere', label: 'Tremere' },
    { key: 'ventrue', label: 'Ventrue' },
    { key: 'banu-haqim', label: 'Banu Haqim' },
    { key: 'caitiff', label: 'Caitiff' },
    { key: 'hecata', label: 'Hecata' },
    { key: 'lasombra', label: 'Lasombra' },
    { key: 'ministry', label: 'Ministry' },
    { key: 'ravnos', label: 'Ravnos' },
    { key: 'tzimisce', label: 'Tzimisce' }
]

export const ClanSelectionComp = () => {
    return html`
        <div class="clan-grid" id="clanGrid">
            ${clans.map(clan => html`
                <div class="clan-option" data-clan="${clan.key}">
                    <div class="clan-image">
                        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e3e3e3">
                            <path d="${clanIconPath}"/>
                        </svg>
                    </div>
                    <span class="clan-name">${clan.label}</span>
                </div>
            `)}
        </div>
        <div class="clan-details" id="clanDetails" style="display: none;">
            <h5 id="selectedClanName"></h5>
            <p id="clanInfo" rows="6"></p>
        </div>
    `
}
