function checkOrientation() {
    if (window.innerWidth > window.innerHeight) {
        window.location.href = "red_home.html"
    }
}

window.addEventListener("load", checkOrientation);
window.addEventListener("orientationchange", checkOrientation);
window.addEventListener("resize", checkOrientation);
