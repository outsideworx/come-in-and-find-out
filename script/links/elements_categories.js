function positionLinks() {
    const img = document.getElementById("main-image");

    const imgNaturalWidth = 1920;
    const imgNaturalHeight = 1080;
    const items = [
        {element: document.getElementById("item1"), x: 480, y: 80},
        {element: document.getElementById("item2"), x: 860, y: 80},
        {element: document.getElementById("item3"), x: 480, y: 370},
        {element: document.getElementById("item4"), x: 860, y: 370},
        {element: document.getElementById("item5"), x: 480, y: 660},
        {element: document.getElementById("item6"), x: 860, y: 660}
    ];

    const imgContainer = img.parentElement;
    const containerRect = imgContainer.getBoundingClientRect();

    const scale = Math.min(containerRect.width / imgNaturalWidth, containerRect.height / imgNaturalHeight);

    const displayedWidth = imgNaturalWidth * scale;
    const displayedHeight = imgNaturalHeight * scale;

    const offsetX = (containerRect.width - displayedWidth) / 2;
    const offsetY = (containerRect.height - displayedHeight) / 2;

    items.forEach(hs => {
        hs.element.style.left = `${offsetX + hs.x * scale}px`;
        hs.element.style.top = `${offsetY + hs.y * scale}px`;
        hs.element.style.width = `${340 * scale}px`;
        hs.element.style.height = `${256 * scale}px`;

        const imgInsideItem = hs.element.querySelector("img");
        if (imgInsideItem) {
            imgInsideItem.style.position = "absolute";
            imgInsideItem.style.left = "50%";
            imgInsideItem.style.top = "50%";
            imgInsideItem.style.transform = "translate(-50%, -50%)";
        }
    });
}

window.addEventListener("resize", positionLinks);
window.addEventListener("load", positionLinks);
