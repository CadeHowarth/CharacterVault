import { h } from 'preact'
import htm from 'htm'

const html = htm.bind(h)

export const CharacterInputsComp = () => {
    return html
    `
        <div class="character-inputs" id="character-inputs-container">
            <label class="char-input">
                <b>Character Name</b>
                <input type="text" placeholder="What is your name?" data-testId="charNameInput" name="name" id="characterName" required />
                <span class="error" aria-live="polite" id="name-error"></span>
            </label>

            <label class="char-input">
                <b>Character Age</b>
                <select id="characterAge" name="characterAge" class="char-input" required>
                    <option value="">Select Age</option>
                    <option value="neonate">Childer (embraced within the last 15 years)</option>
                    <option value="ancilla">Neonate (embraced 15 - 50 years ago)</option>
                    <option value="elder">Ancilla (embraced 50 - 100 years ago)</option>
                </select>
            </label>

            <label class="char-input">
                <b>Sire Name</b>
                <input type="text" placeholder="What is their name?" data-testId="sireNameInput" name="name" id="sireName" required />
                <span class="error" aria-live="polite" id="name-error"></span>
            </label>

            <label class="char-input">
                <b>Sire Generation</b>
                <input placeholder="Generation from 2-12" data-testId="sireGenInput" type="text" inputmode="numeric" pattern="([2-9]|1[0-2])" id="generation" required />
                <span class="error" aria-live="polite" id="generation-error"></span>
            </label>
        </div>
    `
}
