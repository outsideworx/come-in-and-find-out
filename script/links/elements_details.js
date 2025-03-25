function positionLinks() {
    const img = document.getElementById("main-image");

    const imgNaturalWidth = 1920;
    const imgNaturalHeight = 1080;
    const details = [
        {element: document.getElementById("detail1"), x: 480, y: 80},
        {element: document.getElementById("detail2"), x: 860, y: 80},
        {element: document.getElementById("detail3"), x: 480, y: 460},
        {element: document.getElementById("detail4"), x: 860, y: 460}
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

        const imgInsideItem = hs.element.querySelector("img");
        if (imgInsideItem) {
            imgInsideItem.style.position = "absolute";
            imgInsideItem.style.left = "50%";
            imgInsideItem.style.top = "50%";
            imgInsideItem.style.transform = "translate(-50%, -50%)";
        }
    });
}

// Run on page load and window resize
window.addEventListener("resize", positionLinks);
window.addEventListener("load", positionLinks);
