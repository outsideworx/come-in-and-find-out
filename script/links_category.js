function positionLinks() {
    const img = document.getElementById("main-image");
    const theme0 = document.getElementById("theme0");
    const theme1 = document.getElementById("theme1");
    const theme2 = document.getElementById("theme2");
    const theme3 = document.getElementById("theme3");
    const navigation1 = document.getElementById("navigation1");
    const navigation2 = document.getElementById("navigation2");
    const navigation3 = document.getElementById("navigation3");

    // Original image dimensions (update to match your actual image size)
    const imgNaturalWidth = 1920;
    const imgNaturalHeight = 1080;
    const themes = [
        {element: theme0, x: 1545, y: 700},
        {element: theme1, x: 1367, y: 930},
        {element: theme2, x: 1537, y: 930},
        {element: theme3, x: 1705, y: 930},
        {element: navigation1, x: 636, y: 935},
        {element: navigation2, x: 780, y: 930},
        {element: navigation3, x: 930, y: 930}
    ];

    // Get actual displayed image size
    const imgContainer = img.parentElement;
    const containerRect = imgContainer.getBoundingClientRect();

    // Calculate the correct scale for width and height
    const scale = Math.min(containerRect.width / imgNaturalWidth, containerRect.height / imgNaturalHeight);

    // Get displayed image size based on the scaling factor
    const displayedWidth = imgNaturalWidth * scale;
    const displayedHeight = imgNaturalHeight * scale;

    // Calculate image offset inside the container
    const offsetX = (containerRect.width - displayedWidth) / 2;
    const offsetY = (containerRect.height - displayedHeight) / 2;

    themes.forEach(hs => {
        hs.element.style.left = `${offsetX + hs.x * scale}px`;
        hs.element.style.top = `${offsetY + hs.y * scale}px`;
        hs.element.style.width = `${120 * scale}px`; // Scale hotspot size
        hs.element.style.height = `${120 * scale}px`;
    });
}

// Run on page load and window resize
window.addEventListener("resize", positionLinks);
window.addEventListener("load", positionLinks);
