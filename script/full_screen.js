function positionHotspots() {
    const img = document.getElementById("main-image");
    const hotspot1 = document.getElementById("hotspot1");

    // Original image dimensions (replace with actual image size)
    const imgNaturalWidth = 1920;  // Example width
    const imgNaturalHeight = 1080; // Example height

    // Hotspot positions in original image coordinates
    const hotspots = [
        {element: hotspot1, x: 160, y: 80}
    ];

    // Get the displayed image size
    const imgRect = img.getBoundingClientRect();
    const scaleX = imgRect.width / imgNaturalWidth;
    const scaleY = imgRect.height / imgNaturalHeight;

    // Position each hotspot
    hotspots.forEach(hs => {
        hs.element.style.left = `${imgRect.left + hs.x * scaleX}px`;
        hs.element.style.top = `${imgRect.top + hs.y * scaleY}px`;
        hs.element.style.width = `${256 * scaleX}px`; // Scale hotspot size
        hs.element.style.height = `${300 * scaleY}px`;
    });
}

window.addEventListener("resize", positionHotspots);
window.addEventListener("load", positionHotspots);