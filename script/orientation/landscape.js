function full_screen() {
    let element = document.getElementById("image-container") || document.documentElement;
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

function exit_full_screen() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else if (document.mozFullScreenElement) {
        document.mozCancelFullScreen();
    } else if (document.webkitFullscreenElement) {
        document.webkitExitFullscreen();
    } else if (document.msFullscreenElement) {
        document.msExitFullscreen();
    }
}

function checkOrientation() {
    const image = document.getElementById("image");
    const link = document.getElementById("link");
    if (window.innerWidth > window.innerHeight) {
        image.src = "../img_pages/login.webp";
        link.onclick = full_screen;
    } else {
        image.src = "../img_pages/index.webp";
        link.onclick = null;
        exit_full_screen();
    }
}

window.addEventListener("load", checkOrientation);
window.addEventListener("resize", checkOrientation);
