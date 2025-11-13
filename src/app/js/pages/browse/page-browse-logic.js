const gridCard = document.getElementById('gridCard')

document.addEventListener('DOMContentLoaded', function() {
    if (gridCard) {
        const imageUrl = gridCard.dataset.backgroundImage
        gridCard.style.backgroundImage = `url('${imageUrl}')`
        gridCard.style.backgroundSize = 'cover'
        gridCard.style.backgroundBlendMode = 'overlay'
    }
})