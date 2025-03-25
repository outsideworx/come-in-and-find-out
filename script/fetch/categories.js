function loadImages(category, offset) {
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
            }
        },
        error: function (error) {
            console.error('Error fetching images:', error);
        }
    });
}