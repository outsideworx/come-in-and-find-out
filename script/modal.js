function openModal(modalId) {
    var modal = document.getElementById(modalId);
    var backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop fade";
    backdrop.id = "modal-backdrop";
    document.body.appendChild(backdrop);
    modal.style.display = "block";
    modal.removeAttribute("aria-hidden");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("role", "dialog");
    // Force reflow before adding show class for transition
    void backdrop.offsetHeight;
    void modal.offsetHeight;
    backdrop.classList.add("show");
    modal.classList.add("show");
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    var backdrop = document.getElementById("modal-backdrop");
    modal.classList.remove("show");
    if (backdrop) {
        backdrop.classList.remove("show");
    }
    setTimeout(function () {
        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true");
        modal.removeAttribute("aria-modal");
        modal.removeAttribute("role");
        if (backdrop) {
            backdrop.remove();
        }
    }, 300);
}

document.addEventListener("click", function (event) {
    var toggle = event.target.closest("[data-bs-toggle='modal']");
    if (toggle) {
        var targetId = toggle.getAttribute("data-bs-target").replace("#", "");
        openModal(targetId);
        return;
    }
    var dismiss = event.target.closest("[data-bs-dismiss='modal']");
    if (dismiss) {
        var modal = dismiss.closest(".modal");
        if (modal) {
            closeModal(modal.id);
        }
        return;
    }
    // Close on backdrop click (clicking modal outside dialog)
    if (event.target.classList.contains("modal") && event.target.classList.contains("show")) {
        closeModal(event.target.id);
    }
});
