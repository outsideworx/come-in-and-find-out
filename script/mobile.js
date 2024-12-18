function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

function updateLocation() {
    if (isMobileDevice()) {
        window.location.replace("index_mobile.html");
    }
}

updateLocation();
