function positionHotspots() {
    const img = document.getElementById("main-image");
    const hotspot1 = document.getElementById("hotspot1");
    const hotspot2 = document.getElementById("hotspot2");
    const hotspot3 = document.getElementById("hotspot3");

    // Original image dimensions (update to match your actual image size)
    const imgNaturalWidth = 1920;
    const imgNaturalHeight = 1080;

    // Hotspot positions relative to the original image (x, y in pixels)
    const hotspots = [
        {element: hotspot1, x: 160, y: 80},
        {element: hotspot2, x: 528, y: 80},
        {element: hotspot3, x: 906, y: 80}
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
    hotspots.forEach(hs => {
        hs.element.style.left = `${offsetX + hs.x * scale}px`;
        hs.element.style.top = `${offsetY + hs.y * scale}px`;
        hs.element.style.width = `${256 * scale}px`; // Scale hotspot size
        hs.element.style.height = `${300 * scale}px`;
    });
}

// Run on page load and window resize
window.addEventListener("resize", positionHotspots);
window.addEventListener("load", positionHotspots);
