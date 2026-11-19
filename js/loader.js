
/* =====================================
   MAHESH PERSONAL PORTFOLIO
   LOADING SCREEN CONTROLLER
===================================== */

(function () {

    "use strict";

    // Loader Element
    const loader = document.getElementById("loader");

    if (!loader) {
        return;
    }

    // Loading Settings
    const MIN_LOADING_TIME = 900;
    const MAX_LOADING_TIME = 8000;

    const startTime = Date.now();

    let pageReady = false;
    let loaderRemoved = false;

    // Reduced Motion Preference
    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    // Hide Loader Function
    function hideLoader() {

        if (loaderRemoved) {
            return;
        }

        loaderRemoved = true;

        const elapsedTime = Date.now() - startTime;

        const remainingTime = Math.max(
            0,
            MIN_LOADING_TIME - elapsedTime
        );

        setTimeout(function () {

            loader.classList.add("loader-hidden");

            // Remove loader after animation
            const removeDelay = reducedMotion ? 50 : 750;

            setTimeout(function () {

                if (loader.parentNode) {
                    loader.remove();
                }

            }, removeDelay);

        }, remainingTime);

    }

    // Check Page Loading
    function checkPageReady() {

        if (document.readyState === "complete") {

            pageReady = true;
            hideLoader();

        }

    }

    // Wait for Complete Page Load
    if (document.readyState === "complete") {

        pageReady = true;

    } else {

        window.addEventListener(
            "load",
            checkPageReady,
            { once: true }
        );

    }

    // Maximum Loading Time Protection
    setTimeout(function () {

        if (!pageReady) {

            console.warn(
                "Loading took longer than expected."
            );

            hideLoader();

        }

    }, MAX_LOADING_TIME);

    // Browser Error Handling
    window.addEventListener("error", function (event) {

        console.error(
            "Website Resource Error:",
            event.message
        );

    });

})();
