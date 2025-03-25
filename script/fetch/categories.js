function loadImages(category) {
    const urlParams = new URLSearchParams(window.location.search);
    let offset = urlParams.get("offset");
    if (offset === null) {
        offset = 0;
    }
    $.ajax({
        url: `https://services.outsideworx.net/api/come-in-and-find-out/categories/${category}?offset=${offset}`,
        method: 'GET',
        success: function (response) {
            if (response && Array.isArray(response)) {
                response.forEach((item, index) => {
                    if (item.image1) {
                        document.getElementById("image" + (index + 1)).src = item.image1;
                        const link = document.getElementById("item" + (index + 1));
                        const url = new URL(link.href);
                        url.searchParams.set("id", item.id);
                        link.href = url.toString();
                    }
                });
                for (let i = response.length + 1; i <= 6; i++) {
                    const link = document.getElementById("item" + i);
                    if (link) {
                        link.href = "#";
                        link.style.cursor = "default";
                    }
                }
            }
        },
        error: function (error) {
            console.error('Error fetching images:', error);
        }
    });
}

function setNavigation() {
    const urlParams = new URLSearchParams(window.location.search);
    let offset = urlParams.get("offset");
    if (offset) {
        offset = parseInt(offset);
        if (offset !== 0) {
            let nav1 = document.getElementById("navigation1");
            const url = new URL(nav1.href);
            url.searchParams.set("offset", offset - 1);
            nav1.href = url.toString();
        }
        let nav3 = document.getElementById("navigation3");
        const url = new URL(nav3.href);
        url.searchParams.set("offset", offset + 1);
        nav3.href = url.toString();
    }
}