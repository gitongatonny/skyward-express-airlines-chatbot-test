// Arrow Animation Scripts

// Hide Arrow Fn
function hideArrow() {
    document.getElementById("arrowContainer").style.display = "none";
    // Session storage flag
    sessionStorage.setItem("arrowHidden", "true");
}

// Show arrow func
document.addEventListener("DOMContentLoaded", function () {
    if (sessionStorage.getItem("arrowHidden") === "true") {
        document.getElementById("arrowContainer").style.display = "none";
    } else {
        document.getElementById("arrowContainer").style.display = "block";
    }

    // Auto-hide arrow func
    setTimeout(function () {
        const arrow = document.getElementById("arrowContainer");
        if (arrow.style.display !== "none") {
            arrow.style.opacity = "1";
            let opacity = 1;
            const fadeInterval = setInterval(function () {
                if (opacity <= 0.1) {
                    clearInterval(fadeInterval);
                    arrow.style.display = "none";
                }
                opacity -= 0.1;
                arrow.style.opacity = opacity;
            }, 200);
        }
    }, 15000);

    // Dynamic positioning based on screen size
    function updateArrowPosition() {
        function updateArrowPosition() {
            const arrow = document.getElementById("arrowContainer");

            // Position
            const iconBottom = 15; // Distance from bottom of screen to icon center
            const iconRight = 30; // Distance from right of screen to icon center

            if (window.innerWidth <= 480) {
                // Mobile screens
                arrow.style.bottom = iconBottom + 70 + "px";
                arrow.style.right = iconRight + 30 + "px";
            } else if (window.innerWidth <= 768) {
                // Tablet screens
                arrow.style.bottom = iconBottom + 75 + "px";
                arrow.style.right = iconRight + 40 + "px";
            } else {
                // Desktop screens
                arrow.style.bottom = iconBottom + 75 + "px";
                arrow.style.right = iconRight + 40 + "px";
            }
        }

        updateArrowPosition();
        window.addEventListener("resize", updateArrowPosition);
    }

    // Call on load and resize
    updateArrowPosition();
    window.addEventListener("resize", updateArrowPosition);
});