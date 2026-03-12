import { h } from 'preact'
import htm from 'htm'

const html = htm.bind(h)

export const RegisterComp = () => {
    return html
    `
        <div class="register modal hidden" id="register-modal" data-testId="registerModal">
            <span class="close" id="close-btn-reg" title="Close">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </span>
            <form class="modal-content animate" id="register-modal-form" novalidate>
                <div class="modal-container">
                    <div class="inputs modal-container" id="inputs-container">
                        <label for="username">
                            <b>Username</b>
                            <input type="text" placeholder="Enter Username or Email" data-testId="registerUsernameInput" name="username" id="register-username" required />
                            <span class="error" aria-live="polite" id="reg-username-error"></span>
                        </label>
                        <label for="email">
                            <b>Email</b>
                            <input type="text" placeholder="Enter Email" data-testId="registerEmailInput" name="email" id="register-email" required />
                            <span class="error" aria-live="polite" id="email-error"></span>
                        </label>
                        <label for="password">
                            <b>Password</b>
                            <input type="password" placeholder="Enter Password" data-testId="registerPasswordInput" name="password" id="register-password" required />
                            <span class="error" aria-live="polite" id="reg-password-error"></span>
                        </label>
                        <label for="password">
                            <b>Confirm Password</b>
                            <input type="password" placeholder="Enter Password Again" data-testId="confirmPasswordInput" name="password" id="confirm-password" required />
                            <span class="error" aria-live="polite" id="reg-password-conf-error"></span>
                        </label>
                    </div>
                <div class="links" id="links-container">
                    <label>
                        <input type="checkbox" checked="checked" id="remember-checkbox-register" name="remember" data-testId="rememberCheckboxRegister" />
                        <span>Keep me logged in</span>
                    </label>
                </div>
                <div class="buttons" id="buttons-container">
                    <button type="submit" id="register-confirm" data-testId="confirmRegisterBtn">
                        <span>Sign Up</span>
                    </button>
                </div>
                </div>
            </form>
        </div>
    `
}