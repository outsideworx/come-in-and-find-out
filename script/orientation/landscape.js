function checkOrientation() {
    if (window.innerWidth > window.innerHeight) {
        window.location.href = "home.html";
    }
}

window.addEventListener("load", checkOrientation);
window.addEventListener("resize", checkOrientation);
