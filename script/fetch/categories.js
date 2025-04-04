function loadImages(category) {
    const urlParams = new URLSearchParams(window.location.search);
    const offset = urlParams.get("offset");
    $.ajax({
        url: `https://services.outsideworx.net/api/come-in-and-find-out/categories/${category}?offset=${offset}`,
        method: 'GET',
        success: function (response) {
            if (response && Array.isArray(response)) {
                if (response.length === 0 && offset !== "0") {
                    window.history.go(-1);
                }
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
                    document.getElementById("item" + i).remove();
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
        if (offset >= 6) {
            const nav1 = document.getElementById("navigation1");
            const url = new URL(nav1.href);
            url.searchParams.set("offset", offset - 6);
            nav1.href = url.toString();
        }
        const nav3 = document.getElementById("navigation3");
        const url = new URL(nav3.href);
        url.searchParams.set("offset", offset + 6);
        nav3.href = url.toString();
    }
}