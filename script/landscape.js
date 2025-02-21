// Check if the device is a mobile device
function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

// Function to request fullscreen
function enableFullscreen() {
    let docEl = document.documentElement;

    if (docEl.requestFullscreen) {
        docEl.requestFullscreen();
    } else if (docEl.mozRequestFullScreen) { // Firefox
        docEl.mozRequestFullScreen();
    } else if (docEl.webkitRequestFullscreen) { // Safari iOS
        docEl.webkitRequestFullscreen();
    } else if (docEl.msRequestFullscreen) { // Edge/IE
        docEl.msRequestFullscreen();
    }

    // Show iframe and make it fill the screen after fullscreen is triggered
    setTimeout(() => {
        document.body.classList.add('fullscreen'); // Add fullscreen class to body
    }, 500);
}

// Function to check screen orientation
function checkOrientation() {
    if (isMobileDevice()) {
        const image = document.getElementById("image");
        const link = document.getElementById("link");
        const iframe = document.getElementById("iframe-container");

        if (window.innerWidth > window.innerHeight) {
            // Landscape mode: Update image and show fullscreen button
            image.src = "../img_pages/login.png";
            link.onclick = enableFullscreen; // Allow fullscreen activation on click
            iframe.style.visibility = "visible";
            iframe.style.width = "100vw";
            iframe.style.height = "100vh";
        } else {
            // Portrait mode: Update image and hide iframe
            image.src = "../img_pages/index.webp";
            link.onclick = null; // Disable fullscreen in portrait
            iframe.style.width = "0px";
            iframe.style.height = "0px";
            iframe.style.visibility = "hidden";
        }
    } else {
        // Non-mobile: Show iframe as normal
        document.getElementById("iframe-container").style.visibility = "visible";
        document.getElementById("iframe-container").style.width = "100vw";
        document.getElementById("iframe-container").style.height = "100vh";
    }
}

// Attach events
window.addEventListener("load", checkOrientation);
window.addEventListener("resize", checkOrientation);
