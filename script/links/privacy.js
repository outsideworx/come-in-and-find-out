function positionLinks() {
    const img = document.getElementById("main-image");

    const imgNaturalWidth = 1920;
    const imgNaturalHeight = 1080;
    const privacy = [
        {element: document.getElementById("privacy"), x: 580, y: 600}
    ];

    const imgContainer = img.parentElement;
    const containerRect = imgContainer.getBoundingClientRect();

    const scale = Math.min(containerRect.width / imgNaturalWidth, containerRect.height / imgNaturalHeight);

    const displayedWidth = imgNaturalWidth * scale;
    const displayedHeight = imgNaturalHeight * scale;

    const offsetX = (containerRect.width - displayedWidth) / 2;
    const offsetY = (containerRect.height - displayedHeight) / 2;

    privacy.forEach(hs => {
        hs.element.style.left = `${offsetX + hs.x * scale}px`;
        hs.element.style.top = `${offsetY + hs.y * scale}px`;
        hs.element.style.width = `${315 * scale}px`;
        hs.element.style.height = `${100 * scale}px`;
    });
}

window.addEventListener("resize", positionLinks);
window.addEventListener("load", positionLinks);
