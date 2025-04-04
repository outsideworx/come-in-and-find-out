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
        $.ajax({
            url: `https://services.outsideworx.net/api/callback/come-in-and-find-out`,
            method: 'POST',
            contentType: "application/json",
            data: JSON.stringify({address: address, product: window.location.href}),
            success: function () {
                $("#responseMsg").text("Callback submitted successfully!").css("color", "green");
                setTimeout(function () {
                    $("#interestModal").fadeOut();
                    $("#responseMsg").text("");
                    $("#interest-address").val("");
                }, 3000);
            },
            error: function () {
                $("#responseMsg").text("Something went wrong, you can reach us at: info@come-in-and-find-out.ch").css("color", "red");
            }
        });
    });
});