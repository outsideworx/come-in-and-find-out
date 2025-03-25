function loadImages() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    if (id === null) {
        return;
    }
    $.ajax({
        url: `https://services.outsideworx.net/api/come-in-and-find-out/${id}`,
        method: 'GET',
        success: function (response) {
            if (response) {
                if (response.image1) {
                    document.getElementById("image1").src = response.image1;
                }
                if (response.image2) {
                    document.getElementById("image2").src = response.image2;
                }
                if (response.image3) {
                    document.getElementById("image3").src = response.image3;
                }
                if (response.image4) {
                    document.getElementById("image4").src = response.image4;
                }
            }
        },
        error: function (error) {
            console.error('Error fetching images:', error);
        }
    });
}