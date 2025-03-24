function positionLinks() {
    const img = document.getElementById("main-image");

    // Original image dimensions (update to match your actual image size)
    const imgNaturalWidth = 1920;
    const imgNaturalHeight = 1080;

    // Hotspot positions relative to the original image (x, y in pixels)
    const themes = [
        {element: document.getElementById("theme0"), x: 1545, y: 700},
        {element: document.getElementById("theme1"), x: 1367, y: 930},
        {element: document.getElementById("theme2"), x: 1537, y: 930},
        {element: document.getElementById("theme3"), x: 1705, y: 930}
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

    // Position each hotspot correctly
    themes.forEach(hs => {
        hs.element.style.left = `${offsetX + hs.x * scale}px`;
        hs.element.style.top = `${offsetY + hs.y * scale}px`;
        hs.element.style.width = `${120 * scale}px`;
        hs.element.style.height = `${120 * scale}px`;
    });
}

// Run on page load and window resize
window.addEventListener("resize", positionLinks);
window.addEventListener("load", positionLinks);
