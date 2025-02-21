function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

function enableFullscreen() {
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

    // Expand the iframe only after fullscreen is confirmed
    setTimeout(() => {
        let iframe = document.getElementById("iframe-container");
        iframe.style.width = "100vw";
        iframe.style.height = "100vh";
    }, 300);
}

function checkOrientation() {
    if (isMobileDevice()) {
        const image = document.getElementById("image");
        const link = document.getElementById("link");
        const iframe = document.getElementById("iframe-container");

        if (window.innerWidth > window.innerHeight) {
            image.src = "../img_pages/login.png";
            link.onclick = () => {
                enableFullscreen(); // Call fullscreen only when clicked
            };
        } else {
            image.src = "../img_pages/index.webp";
            link.onclick = null;

            // Instead of hiding, shrink iframe to avoid fullscreen exit
            iframe.style.width = "0px";
            iframe.style.height = "0px";
        }
    } else {
        document.getElementById("iframe-container").style.width = "100vw";
        document.getElementById("iframe-container").style.height = "100vh";
    }
}

// Attach events
window.addEventListener("load", checkOrientation);
window.addEventListener("resize", checkOrientation);
