const images = ['img/tv_toggle_2.png', 'img/tv_toggle_1.png'];

const imageElement = document.getElementById('toggleImage');

let currentIndex = 0;

function toggleImage() {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
}

toggleImage()
setInterval(toggleImage, 250);
