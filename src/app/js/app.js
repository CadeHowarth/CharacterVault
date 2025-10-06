const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')
const carouselItems = document.getElementById('carousel-content')
const backButton = document.getElementById('chevron-left')
const nextButton = document.getElementById('chevron-right')
const itemWidth = document.getElementById('scroll-item').offsetWidth

function toggleSidebar() {
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')

    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
        ul.classList.remove('show')
        ul.prevousElementSibling.classList.remove('rotate')
    })
}

function toggleSubMenu(button) {
    button.nextElementSibling.classList.toggle('show')
    button.classList.toggle('rotate')

    // Handles opening sidebar if a dropdown menu is opened as well
    if(sidebar.classList.contains('close')) {
        sidebar.classList.toggle('close')
        toggleButton.classList.toggle('rotate')
    }
}

backButton.addEventListener('click', () => {
    carouselItems.scrollLeft -= itemWidth
})

nextButton.addEventListener('click', () => {
    carouselItems.scrollLeft += itemWidth
})