$(document).ready(function () {
    $("#interest").click(function () {
        $("#interestModal").fadeIn().css("display", "flex");
    });

    $(".interest-close-btn").click(function () {
        $("#interestModal").fadeOut();
        $("#responseMsg").text("");
        $("#interest-address").val("");
    });

    $("#interestModal").click(function (event) {
        if (!$(event.target).closest(".interest-modal-content").length) {
            $("#interestModal").fadeOut();
            $("#responseMsg").text("");
            $("#interest-address").val("");
        }
    });

    $("#interest-submit").click(function () {
        const address = $("#interest-address").val();
        $("#responseMsg").text("Processing...").css("color", "gray");
        $.ajax({
            url: `/api/callback`,
            method: 'POST',
            contentType: "application/json",
            data: JSON.stringify({address: address, product: window.location.href}),
            success: function () {
                $("#responseMsg").text("Callback requested successfully!").css("color", "green");
            },
            error: function (xhr, status, error) {
                console.error("AJAX Error Status:", status);
                console.error("AJAX Error Message:", error);
                console.error("AJAX Response Text:", xhr.responseText);
                console.log("Response Headers:", xhr.getAllResponseHeaders());

                $("#responseMsg").text("Something went wrong, you can reach us at: info@come-in-and-find-out.ch").css("color", "red");
            }
        });
    });
});