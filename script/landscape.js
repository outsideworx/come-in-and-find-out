function checkOrientation() {
    if (window.matchMedia("(orientation: landscape)").matches) {
        window.location.href = "red_home.html"
    }
}

window.addEventListener("orientationchange", checkOrientation);
window.addEventListener("resize", checkOrientation); // For extra reliability