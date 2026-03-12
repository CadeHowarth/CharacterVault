import { h } from 'preact'
import htm from 'htm'

const html = htm.bind(h)

export const LegendStep = ({
    step, 
    isActive = false,
    iconPath = ''
}) => {
    return html
    `
                    <div class="legend-step ${isActive ? 'active' : ''}" data-step="${step}" onclick="navigateToStep(${step})">
                        <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#e3e3e3">
                            <path d="${iconPath}"/>
                        </svg>
                        <span>${step}</span>
                    </div>
    `
}