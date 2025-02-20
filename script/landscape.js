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

    // Lock orientation if supported
    if (screen.orientation && screen.orientation.lock) {
        try {
            screen.orientation.lock("landscape");
        } catch (err) {
            alert(err);
        }
    }
}

function checkOrientation() {
    if (window.matchMedia("(orientation: landscape)").matches) {
        enableFullscreen();
    } else {
        // Exit fullscreen if not in landscape
        if (document.fullscreenElement || document.webkitFullscreenElement) {
            document.exitFullscreen();
        }
    }
}

window.addEventListener("orientationchange", checkOrientation);
window.addEventListener("resize", checkOrientation); // For extra reliability