document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded successfully!')

    const sidebarState = sessionStorage.getItem('sidebarState')
    if (sidebarState === 'close') {
        sidebar.classList.add('close')
        toggleButton.classList.add('rotate')
        console.log('Loading closed sidebar')
    }

    toggleButton.addEventListener('click', () => {
        if (sidebar.classList.contains('close') && toggleButton.classList.contains('rotate')) {
            sessionStorage.setItem('sidebarState', 'close')
            console.log('--CLICK CLOSE--')
        } else {
            sessionStorage.setItem('sidebarState', 'show')
            console.log('--CLICK OPEN--')
        }
    })
})