import { h } from 'preact'
import htm from 'htm'
import { LegendStep } from './modules/legend-step-component.js'
import { CreatorBox } from './modules/creator-box-component.js'
import { CharacterInputsComp } from './modules/character-details-component.js'
import { ClanSelectionComp } from './modules/clan-selection-component.js'
import { TrackerContentComp } from './modules/tracker-content-component.js'
import { DisciplinesComp } from './modules/disciplines-component.js'
import { PredatorTypeComp } from './modules/predator-type-component.js'
import { AdvantagesComp } from './modules/advantages-component.js'
import { DescriptionAside } from './modules/description-component.js'

const html = htm.bind(h)

const legendIcons = {
    1: 'M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Z',
    2: 'M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z',
    3: 'M480-120 200-272v-240L480-360l280-152v240L480-120Zm0-332L274-480l206-148 206 148-206 148Zm0 241 224-116v-168L480-360 256-455v168l224 116Zm0-241Zm0 241Zm0 0Z',
    4: 'M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3l-44 44q-11-2-22-3t-22-1q-109 0-184.5 75.5T220-480q0 109 75.5 184.5T480-220q109 0 184.5-75.5T740-480q0-11-1-22t-3-22l44-44q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm-56-216 56-57 56 57 56-56-57-56 57-56-56-56-56 56-56-56-57 56 57 56-57 56 56 56Zm370 246-56-56 56-56-56-56 56-56 56 56-56 56 56 56-56 56Z',
    5: 'M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q150 0 255 105t105 255q0 150-105 255T480-120Zm0-80q109 0 184.5-75.5T740-480q0-109-75.5-184.5T480-740q-109 0-184.5 75.5T220-480q0 109 75.5 184.5T480-220Zm0-60q-75 0-127.5-52.5T300-480q0-75 52.5-127.5T480-660q75 0 127.5 52.5T660-480q0 75-52.5 127.5T480-300Z',
    6: 'M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q150 0 255 105t105 255q0 150-105 255T480-120Zm0-80q109 0 184.5-75.5T740-480q0-109-75.5-184.5T480-740q-109 0-184.5 75.5T220-480q0 109 75.5 184.5T480-220Zm0-60q-75 0-127.5-52.5T300-480q0-75 52.5-127.5T480-660q75 0 127.5 52.5T660-480q0 75-52.5 127.5T480-300Z'
}

export const Create = () => {
    return html
    `
            <div class="container">
                <h1 class="heading content">
                    Vampire: the Masquerade
                </h1>
                <h2>
                    Character Builder
                </h2>
            </div>
            <div class="creator-wrapper">
                <aside class="creator-legend" id="creatorLegend">
                    ${LegendStep({ step: 1, isActive: true, iconPath: legendIcons[1] })}
                    ${LegendStep({ step: 2, iconPath: legendIcons[2] })}
                    ${LegendStep({ step: 3, iconPath: legendIcons[3] })}
                    ${LegendStep({ step: 4, iconPath: legendIcons[4] })}
                    ${LegendStep({ step: 5, iconPath: legendIcons[5] })}
                    ${LegendStep({ step: 6, iconPath: legendIcons[6] })}
                </aside>
                <div class="container create" id="createContainer" data-background-image="../../content/images/vtmv5_container_background.jpg">
                    ${CreatorBox({
                        step: 1,
                        title: 'Who is Your Kindred?',
                        isActive: true,
                        content: CharacterInputsComp(),
                        showContinue: true,
                        continueProps: { step: 1 }
                    })}
                    ${CreatorBox({
                        step: 2,
                        title: 'Choose Your Clan',
                        content: ClanSelectionComp(),
                        showContinue: true,
                        continueProps: { step: 2, id: 'step2Submit', style: 'display: none;' }
                    })}
                    ${CreatorBox({
                        step: 3,
                        title: 'Attributes, Skills & Specialties',
                        content: TrackerContentComp(),
                        showContinue: true,
                        continueProps: { step: 3 }
                    })}
                    ${CreatorBox({
                        step: 4,
                        title: 'Disciplines',
                        content: DisciplinesComp(),
                        showContinue: true,
                        continueProps: { step: 4 }
                    })}
                    ${CreatorBox({
                        step: 5,
                        title: 'Predator Type',
                        content: PredatorTypeComp(),
                        showContinue: true,
                        continueProps: { step: 5 }
                    })}
                    ${CreatorBox({
                        step: 6,
                        title: 'Advantages',
                        content: AdvantagesComp()
                    })}
                </div>
                ${DescriptionAside()}
            </div>
    `
}