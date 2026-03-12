import { h } from 'preact'
import htm from 'htm'
import { Sidebar } from '../sidebar/sidebar-component.js'
import { LoginComp } from '../../login/modules/login-modal-component.js'
import { RegisterComp } from '../../login/modules/register-modal-component.js'

const html = htm.bind(h)

export const Layout = ({ children, title, scripts = [], styles = [] }) => {
  return html
  `
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
        <link rel="stylesheet" href="/app/css/style.css" />
        <link rel="stylesheet" href="/app/components/global/login/loginModal.css" />
        <link rel="stylesheet" href="/app/components/global/login/registerModal.css" />
        ${styles.map(href => html`<link rel="stylesheet" href=${href} />`)}
        <script src="/app/js/app.js" defer></script>
        <script type="module" src="/app/components/global/login/loginModal.js" defer></script>
        <script type="module" src="/app/components/global/login/registerModal.js" defer></script>
        ${scripts.map(({ src, type, defer }) => html`<script src=${src} type=${type} defer=${defer}></script>`)}
    </head>
    <body>
        <div class="overlay hidden" id="modal-backdrop"></div>
        <${LoginComp} />
        <${RegisterComp} />
        <${Sidebar} />
        <main>
            ${children} 
        </main>
    </body>
    </html>
  `
}