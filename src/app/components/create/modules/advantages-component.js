import { h } from 'preact'
import htm from 'htm'

const html = htm.bind(h)

const toLabel = (value) => value
    .split('-')
    .map(v => v.charAt(0).toUpperCase() + v.slice(1))
    .join(' ')

const makeItems = (items) => items.map(item => ({
    name: item.name,
    label: item.label || toLabel(item.name)
}))

export const AdvantagesComp = () => {
    const groups = {
        merits: [
            { title: 'Linguistics', items: makeItems([{ name: 'linguistics', label: 'Linguistics' }]) }
        ],
        backgrounds: [
            { title: 'Allies', items: makeItems([{ name: 'allies' }]) },
            { title: 'Contacts', items: makeItems([{ name: 'contacts' }]) },
            {
                title: 'Fame',
                items: makeItems([
                    { name: 'fame' },
                    { name: 'influencer' },
                    { name: 'enduring-fame', label: 'Enduring Fame' }
                ])
            },
            { title: 'Influence', items: makeItems([{ name: 'influence' }]) },
            {
                title: 'Haven',
                items: makeItems([
                    { name: 'haven' },
                    { name: 'armory', label: 'Hidden Armory' },
                    { name: 'cell' },
                    { name: 'watchmen' },
                    { name: 'laboratory' },
                    { name: 'library' },
                    { name: 'location' },
                    { name: 'luxury' },
                    { name: 'postern' },
                    { name: 'security-system', label: 'Security System' },
                    { name: 'surgery' },
                    { name: 'warding' },
                    { name: 'holy-ground', label: 'Holy Ground' },
                    { name: 'shrine' },
                    { name: 'business', label: 'Business Establishment' },
                    { name: 'furcus', label: 'Furcus' },
                    { name: 'machine', label: 'Machine Shop' },
                    { name: 'mobile' },
                    { name: 'armored', label: 'Armored' },
                    { name: 'smugglers', label: 'Smugglers Stash' },
                    { name: 'spare-plates', label: 'Spare Plates' }
                ])
            },
            { title: 'Herd', items: makeItems([{ name: 'herd' }]) },
            {
                title: 'Mask',
                items: makeItems([
                    { name: 'mask' },
                    { name: 'zeroed' },
                    { name: 'cobbler' }
                ])
            },
            { title: 'Mawla', items: makeItems([{ name: 'mawla' }]) },
            { title: 'Resources', items: makeItems([{ name: 'resources' }]) },
            { title: 'Retainers', items: makeItems([{ name: 'retainers' }]) },
            {
                title: 'Status',
                items: makeItems([
                    { name: 'status' },
                    { name: 'city-secrets', label: 'City Secrets' }
                ])
            }
        ]
    }

    return html
    `
        <div class="advantages-section">
            <h5>Merits</h5>
            <div class="advantages-container">
                ${groups.merits.map(group => html`
                    <div class="advantage-category">
                        <h6>${group.title}</h6>
                        <div class="advantage-grid">
                            ${group.items.map(item => html`
                                <div class="advantage-item">
                                    <label>${item.label}</label>
                                    <div class="tracker-button-group" data-type="advantage" data-name="${item.name}">
                                        <div class="tracker-buttons" data-value="0"></div>
                                        <button type="button" class="decrement-btn">−</button>
                                    </div>
                                </div>
                            `)}
                        </div>
                    </div>
                `)}
            </div>
        </div>
        <div class="advantages-section">
            <h5>Backgrounds</h5>
            <div class="advantages-container">
                ${groups.backgrounds.map(group => html`
                    <div class="advantage-category">
                        <h6>${group.title}</h6>
                        <div class="advantage-grid">
                            ${group.items.map(item => html`
                                <div class="advantage-item">
                                    <label>${item.label}</label>
                                    <div class="tracker-button-group" data-type="advantage" data-name="${item.name}">
                                        <div class="tracker-buttons" data-value="0"></div>
                                        <button type="button" class="decrement-btn">−</button>
                                    </div>
                                </div>
                            `)}
                        </div>
                    </div>
                `)}
            </div>
        </div>
    `
}