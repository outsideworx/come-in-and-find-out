$(document).ready(function () {
    function loadImages() {
        $.ajax({
            url: 'https://services.outsideworx.net/api/come-in-and-find-out/Furniture?offset=0',
            method: 'GET',
            success: function (response) {
                if (response && Array.isArray(response)) {
                    response.forEach((item, index) => {
                        if (item.image1) {
                            document.getElementById("image" + (index + 1)).src = item.image1;
                        }
                    });
                }
            },
            error: function (error) {
                console.error('Error fetching images:', error);
            }
        });
    }

    loadImages();
});