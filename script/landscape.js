function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

function enableFullscreen() {
    // Try to go fullscreen
    let docEl = document.documentElement;
    if (docEl.requestFullscreen) {
        docEl.requestFullscreen();
    } else if (docEl.mozRequestFullScreen) { // Firefox
        docEl.mozRequestFullScreen();
    } else if (docEl.webkitRequestFullscreen) { // Chrome, Safari, Opera
        docEl.webkitRequestFullscreen();
    } else if (docEl.msRequestFullscreen) { // IE/Edge
        docEl.msRequestFullscreen();
    }

    document.getElementById("iframe-container").style.display = "block";
}

function checkOrientation() {
    if (isMobileDevice()) {
        const image = document.getElementById("image");
        const link = document.getElementById("link");
        if (window.innerWidth > window.innerHeight) {
            image.src = "../img_pages/login.png"
            link.onclick = enableFullscreen;
        } else {
            image.src = "../img_pages/index.webp"
            link.onclick = null;
            document.getElementById("iframe-container").style.display = "none";
        }
    } else {
        document.getElementById("iframe-container").style.display = "block";
    }
}

window.addEventListener("load", checkOrientation);
window.addEventListener("resize", checkOrientation);
