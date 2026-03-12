import { h } from 'preact'
import htm from 'htm'

const html = htm.bind(h)

export const DescriptionAside = () => {
    return html
    `
                <aside class="description-container" id="descriptionContainer">
                    <div class="description-box purpose-description">
                        <h5 id="purposeHeader">Welcome, Kindred.</h5>
                        <span id="purposeText">Welcome to the world of Vampire: The Masquerade 5th Edition character creation! This process will guide you through the steps of creating your own unique vampire character, from choosing your clan and attributes to selecting your disciplines and background. Let's begin our journey into the night together.</span>
                    </div>
                    <div class="description-box selection-description">
                        <h5 id="selectionHeader">Steps</h5>
                        <span id="selectionText">Click on steps to see descriptions for each step of character creation.</span>
                    </div>
                </aside>
    `
}