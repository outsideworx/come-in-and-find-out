const images = ['img/tv_toggle_2.webp', 'img/tv_toggle_1.webp'];

const imageElement = document.getElementById('toggleImage');

let currentIndex = 0;

function toggleImage() {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
}

toggleImage()
setInterval(toggleImage, 250);
