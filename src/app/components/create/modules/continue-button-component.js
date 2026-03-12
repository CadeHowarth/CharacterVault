import { h } from 'preact'
import htm from 'htm'

const html = htm.bind(h)

export const ContinueBtn = ({ step, id = '', style = '' } = {}) => {
    return html
    `
        <button type="button" class="step-submit-btn" onclick="submitStep(${step})" id="${id}" style="${style}">Continue</button>
    `
}