let items = [
    {element: document.getElementById("item1"), x: 480, y: 80},
    {element: document.getElementById("item2"), x: 860, y: 80},
    {element: document.getElementById("item3"), x: 480, y: 370},
    {element: document.getElementById("item4"), x: 860, y: 370},
    {element: document.getElementById("item5"), x: 480, y: 660},
    {element: document.getElementById("item6"), x: 860, y: 660}
];

function positionLinks() {
    const img = document.getElementById("main-image");

    // Original image dimensions (update to match your actual image size)
    const imgNaturalWidth = 1920;
    const imgNaturalHeight = 1080;

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

    items.forEach(hs => {
        hs.element.style.left = `${offsetX + hs.x * scale}px`;
        hs.element.style.top = `${offsetY + hs.y * scale}px`;
        hs.element.style.width = `${340 * scale}px`;
        hs.element.style.height = `${256 * scale}px`;
    });
}

// Run on page load and window resize
window.addEventListener("resize", positionLinks);
window.addEventListener("load", positionLinks);
