function loadImages(category, offset) {
    $.ajax({
        url: `https://services.outsideworx.net/api/come-in-and-find-out/categories/${category}?offset=${offset}`,
        method: 'GET',
        success: function (response) {
            if (response && Array.isArray(response)) {
                response.forEach((item, index) => {
                    console.log("PROCESSING...");
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