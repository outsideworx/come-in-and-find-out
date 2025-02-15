function positionLinks() {
    const img = document.getElementById("main-image");
    const detail1 = document.getElementById("detail1");
    const detail2 = document.getElementById("detail2");
    const detail3 = document.getElementById("detail3");
    const detail4 = document.getElementById("detail4");

    // Original image dimensions (update to match your actual image size)
    const imgNaturalWidth = 1920;
    const imgNaturalHeight = 1080;
    const details = [
        {element: detail1, x: 480, y: 80},
        {element: detail2, x: 860, y: 80},
        {element: detail3, x: 480, y: 460},
        {element: detail4, x: 860, y: 460}
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

    details.forEach(hs => {
        hs.element.style.left = `${offsetX + hs.x * scale}px`;
        hs.element.style.top = `${offsetY + hs.y * scale}px`;
        hs.element.style.width = `${340 * scale}px`;
        hs.element.style.height = `${340 * scale}px`;
    });
}

// Run on page load and window resize
window.addEventListener("resize", positionLinks);
window.addEventListener("load", positionLinks);
