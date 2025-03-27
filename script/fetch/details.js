function loadImages() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    if (id === null) {
        return;
    }
    $.ajax({
        url: `https://services.outsideworx.net/api/cached/come-in-and-find-out/${id}`,
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
                if (response.description) {
                    document.getElementById("description").innerHTML = response.description.replace(/\n/g, "<br>");
                }
            }
        },
        error: function (error) {
            console.error('Error fetching images:', error);
        }
    });
}