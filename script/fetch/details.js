function loadImages() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    if (id === null) {
        return;
    }
    $.ajax({
        url: `http://localhost:8080/api/cached/come-in-and-find-out/${id}`,
        method: 'GET',
        success: function (response) {
            if (response) {
                if (response.image1) {
                    document.getElementById("image1").src = response.image1;
                    document.getElementById("image1").hidden = false;
                } else {
                    document.getElementById("image1").remove();
                }
                if (response.image2) {
                    document.getElementById("image2").src = response.image2;
                    document.getElementById("image2").hidden = false;
                } else {
                    document.getElementById("image2").remove();
                }
                if (response.image3) {
                    document.getElementById("image3").src = response.image3;
                    document.getElementById("image3").hidden = false;
                } else {
                    document.getElementById("image3").remove();
                }
                if (response.image4) {
                    document.getElementById("image4").src = response.image4;
                    document.getElementById("image4").hidden = false;
                } else {
                    document.getElementById("image4").remove();
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