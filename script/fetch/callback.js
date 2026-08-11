function closeCallbackModal() {
    document.getElementById("callbackModal").classList.remove("show");
    document.getElementById("responseMsg").textContent = "";
    document.getElementById("callback-address").value = "";
    window.history.back();
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("callback").addEventListener("click", function () {
        document.getElementById("callbackModal").classList.add("show");
    });

    document.querySelector(".callback-close-btn").addEventListener("click", function () {
        closeCallbackModal();
    });

    document.getElementById("callbackModal").addEventListener("click", function (event) {
        if (!event.target.closest(".callback-modal-content")) {
            closeCallbackModal();
        }
    });

    document.getElementById("callback-submit").addEventListener("click", function () {
        const address = document.getElementById("callback-address").value;
        const responseMsg = document.getElementById("responseMsg");
        responseMsg.textContent = "Processing...";
        responseMsg.style.color = "gray";
        fetch("/api/callback", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({address: address, product: window.location.href})
        })
            .then(function (response) {
                if (response.ok) {
                    responseMsg.textContent = "Callback requested successfully!";
                    responseMsg.style.color = "green";
                } else {
                    throw new Error("Request failed");
                }
            })
            .catch(function () {
                responseMsg.textContent = "Something went wrong, you can reach us at: info@come-in-and-find-out.ch";
                responseMsg.style.color = "red";
            });
    });
});
