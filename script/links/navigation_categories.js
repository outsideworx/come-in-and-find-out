function positionLinks() {
    const img = document.getElementById("main-image");
    const navigation1 = document.getElementById("navigation1");
    const navigation2 = document.getElementById("navigation2");
    const navigation3 = document.getElementById("navigation3");

    // Original image dimensions (update to match your actual image size)
    const imgNaturalWidth = 1920;
    const imgNaturalHeight = 1080;
    const navigation = [
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

    navigation.forEach(hs => {
        hs.element.style.left = `${offsetX + hs.x * scale}px`;
        hs.element.style.top = `${offsetY + hs.y * scale}px`;
        hs.element.style.width = `${120 * scale}px`;
        hs.element.style.height = `${120 * scale}px`;
    });
}

// Run on page load and window resize
window.addEventListener("resize", positionLinks);
window.addEventListener("load", positionLinks);
