function positionLinks() {
    const img = document.getElementById("main-image");

    const imgNaturalWidth = 1920;
    const imgNaturalHeight = 1080;
    const navigation = [
        {element: document.getElementById("navigation2"), x: 780, y: 930},
    ];
    const callbacks = [
        {element: document.getElementById("callback"), x: 654, y: 832}
    ];
    const descriptions = [
        {element: document.getElementById("description"), x: 130, y: 400}
    ];

    const imgContainer = img.parentElement;
    const containerRect = imgContainer.getBoundingClientRect();

    const scale = Math.min(containerRect.width / imgNaturalWidth, containerRect.height / imgNaturalHeight);

    const displayedWidth = imgNaturalWidth * scale;
    const displayedHeight = imgNaturalHeight * scale;

    const offsetX = (containerRect.width - displayedWidth) / 2;
    const offsetY = (containerRect.height - displayedHeight) / 2;

    navigation.forEach(hs => {
        hs.element.style.left = `${offsetX + hs.x * scale}px`;
        hs.element.style.top = `${offsetY + hs.y * scale}px`;
        hs.element.style.width = `${120 * scale}px`;
        hs.element.style.height = `${120 * scale}px`;
    });
    callbacks.forEach(hs => {
        hs.element.style.left = `${offsetX + hs.x * scale}px`;
        hs.element.style.top = `${offsetY + hs.y * scale}px`;
        hs.element.style.width = `${380 * scale}px`;
        hs.element.style.height = `${100 * scale}px`;
    });
    descriptions.forEach(hs => {
        hs.element.style.left = `${offsetX + hs.x * scale}px`;
        hs.element.style.top = `${offsetY + hs.y * scale}px`;
        hs.element.style.width = `${310 * scale}px`;
        hs.element.style.height = `${580 * scale}px`;
    });
}

window.addEventListener("resize", positionLinks);
window.addEventListener("load", positionLinks);
