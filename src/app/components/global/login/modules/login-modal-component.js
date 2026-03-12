import { h } from 'preact'
import htm from 'htm'

const html = htm.bind(h)

export const LoginComp = () => {
    return html
    `
        <div class="login modal hidden" id="login-modal" data-testId="loginModal">
            <span class="close" id="close-btn-login" title="Close">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </span>
            <form class="modal-content animate" id="login-modal-form" novalidate>
                <div class="modal-container">
                    <div class="inputs modal-container" id="inputs-container">
                        <label for="username">
                            <b>Username</b>
                            <input type="text" placeholder="Enter Username or Email" data-testId="loginUsernameInput" name="username" id="username" required />
                            <span class="error" aria-live="polite" id="username-error"></span>
                        </label>
                        <label for="password">
                            <b>Password</b>
                            <input type="password" placeholder="Enter Password" data-testId="loginPasswordInput" name="password" id="password" required />
                            <span class="error" aria-live="polite" id="password-error"></span>
                        </label>
                    </div>
                <div class="links" id="links-container">
                    <label>
                        <input type="checkbox" checked="checked" id="remember-checkbox" name="remember" data-testId="rememberCheckbox" />
                        <span>Remember Me</span>
                    </label>
                    <span class="forgot" id="forgot-btn" data-testId="forgotPasswordBtn">
                        <a href="#">
                            <span>Forgot Password?</span>
                        </a>
                    </span>
                </div>
                <div class="buttons" id="buttons-container">
                    <button type="submit" id="login-submit" data-testId="submitBtn">
                        <span>Login</span>
                    </button>
                    <button type="button" id="register-submit" data-testId="registerBtn">
                        <span>Register</span>
                    </button>
                </div>
                </div>
            </form>
        </div>
    `
}