import { h } from 'preact'
import htm from 'htm'

import { ContinueBtn } from './continue-button-component.js'

const html = htm.bind(h)

export const CreatorBox = ({
    step,
    title,
    content = '',
    isActive = false,
    showContinue = false,
    continueProps = { step }
}) => {
    return html
    `
                    <div class="creator-box ${isActive ? 'active' : ''}" id="step-${step}" data-step="${step}">
                        <div class="creator-box-header" onclick="toggleBox(${step})">
                            <h4>${title}</h4>
                            <svg class="collapse-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                                <path d="M480-360 280-560h400L480-360Z"/>
                            </svg>
                        </div>
                        <div class="creator-box-content">
                            ${content}
                            ${showContinue ? ContinueBtn(continueProps) : ''}
                        </div>
                    </div>
    `
}