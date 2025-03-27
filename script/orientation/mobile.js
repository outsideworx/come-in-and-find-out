function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

function updateSize() {
    if (isMobileDevice()) {
        document.getElementById("televisionVideoId").height = 400;
    }
}

updateSize();
