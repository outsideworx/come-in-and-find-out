$(document).ready(function () {
    $("#callback").click(function () {
        $("#callbackModal").fadeIn().css("display", "flex");
    });

    $(".callback-close-btn").click(function () {
        $("#callbackModal").fadeOut();
        $("#responseMsg").text("");
        $("#callback-address").val("");
        window.history.back();
    });

    $("#callbackModal").click(function (event) {
        if (!$(event.target).closest(".callback-modal-content").length) {
            $("#callbackModal").fadeOut();
            $("#responseMsg").text("");
            $("#callback-address").val("");
            window.history.back();
        }
    });

    $("#callback-submit").click(function () {
        const address = $("#callback-address").val();
        $("#responseMsg").text("Processing...").css("color", "gray");
        $.ajax({
            url: `/api/callback`,
            method: 'POST',
            contentType: "application/json",
            data: JSON.stringify({address: address, product: window.location.href}),
            success: function () {
                $("#responseMsg").text("Callback requested successfully!").css("color", "green");
            },
            error: function () {
                $("#responseMsg").text("Something went wrong, you can reach us at: info@come-in-and-find-out.ch").css("color", "red");
            }
        });
    });
});