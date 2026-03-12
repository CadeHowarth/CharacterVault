import { h } from 'preact'
import htm from 'htm'

const html = htm.bind(h)

export const Homepage = () => {
    return html
    `
             <div class="header">
                <h1 class="heading top">Your People
                    <br />
                    Your Characters
                    <br />
                    Your
                    <span>
                        <em class="italic">Vault</em>
                    </span>
                </h1>
                <p>Create, share, and store all of your unique characters for your favorite tabletop systems with Character Vault.</p>
            </div>
            <div class="collection">
                <a href="/games/choose" class="home-btn-group-body" id="create-char-btn" data-testId="btnGroupChar">
                    <span>Create a Character</span>
                </a>
                <a href="app/components/browse/page-browse.html" class="home-btn-group-body" id="browse-games-btn" data-testId="btnGroupGames">
                    <span>Browse Games</span>
                </a>
            </div>
            <div class="divider"></div>
            <div class="container">
                <h2 class="heading content">
                    Create, journey, and adventure for free.
                </h2>
                <p>The vault supports creating as many characters for all supported game systems as needed. Away with faulty subscription services, gaming is for everyone. Here's how it works:</p>
                <div class="carousel" data-testId="mainCarousel">
                    <button class="carousel-button prev" id="chevron-left" data-testId="carouselBackBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
                    </button>
                        <ul class="carousel-items" id="carousel-content">
                            <li class="carousel-item" id="scroll-item">
                                <h3>Choose a System</h3>
                                <span>From any of system supported by the vault.</span>
                            </li>
                            <li class="carousel-item" id="scroll-item">
                                <h3>Make a Character</h3>
                                <span>With the online character creator.</span>
                            </li>
                            <li class="carousel-item" id="scroll-item">
                                <h3>Connect to a Game</h3>
                                <span>With a code and see all of your friends' characters.</span>
                            </li>
                            <li class="carousel-item" id="scroll-item">
                                <h3>Share any Character</h3>
                                <span>From the cloud, or download to your device.</span>
                            </li>
                        </ul>
                    <button class="carousel-button next" id="chevron-right" data-testId="carouselNextBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
                    </button>
                </div>
            </div>
            <div class="divider"></div>
            <div class="container">
                <h2 class="heading content">
                    Share with your table.
                </h2>
                <p>With the connection feature, coordinated gaming tables are at your fingertips. You can share your characters with your friends, and even export your character sheets for your convenience. The vault doesn't care where your sheets are- as long as you have them.</p>
            </div>
            <div class="divider"></div>
            <div class="container">
                <h2 class="heading content">
                    Ease of Access.
                </h2>
                <p>With a compendium of content to pull from, creating characters is as easy or complex as you want it to be.</p>
                <div class="layout-grid">
                    <div class="grid-card">
                        <h3 class="card-title">
                            Tooltips and Automatic Features
                        </h3>
                        <span>With each game's compendium of content that populates tooltips and creator features, you can make characters with full confidence.</span>
                    </div>
                    <div class="grid-card">
                        <h3 class="card-title">
                            Download and Take With You
                        </h3>
                        <span>Facts are, you won't have connection everywhere. The vault doesn't care where you are, just that you always have your character. Download to any device and be secure that you have a way to play.</span>
                    </div>
                        <div class="grid-card">
                        <h3 class="card-title">
                            Manual and Automated
                        </h3>
                        <span>Dice rolls and content are great, but the joy of games are when you create for yourself. There's plenty of pre-written content to go around, but there's also always a way to overwrite anything manually.</span>
                    </div>
                        <div class="grid-card">
                        <h3 class="card-title">
                            Always Free
                        </h3>
                        <span>The vault is a non-profit service, meaning it provides its services for free and will never charge for any game or content it supports. The mission is gaming, the focus is the community.</span>
                </div>
            </div>
        </div>
    `
}