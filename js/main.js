/* =====================================
   MAHESH PERSONAL PORTFOLIO
   MAIN JAVASCRIPT
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    "use strict";

    /* =================================
       1. MOBILE NAVIGATION
    ================================= */

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", function () {

            const isOpen = navLinks.classList.toggle("active");

            menuBtn.setAttribute("aria-expanded", isOpen);

            menuBtn.textContent = isOpen ? "✕" : "☰";

        });

        // Close menu after clicking a link

        const allNavLinks = navLinks.querySelectorAll("a");

        allNavLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("active");

                menuBtn.textContent = "☰";

                menuBtn.setAttribute("aria-expanded", "false");

            });

        });

        // Close menu with Escape key

        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {

                navLinks.classList.remove("active");

                menuBtn.textContent = "☰";

                menuBtn.setAttribute("aria-expanded", "false");

            }

        });

    }


    /* =================================
       2. SMOOTH SCROLLING
    ================================= */

    const internalLinks = document.querySelectorAll(
        'a[href^="#"]'
    );

    internalLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =================================
       3. SCROLL REVEAL ANIMATION
    ================================= */

    const revealElements = document.querySelectorAll(
        ".intro-section, .details-section, .social-section, .contact-section, .detail-card"
    );

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(

            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("active");

                        observer.unobserve(entry.target);

                    }

                });

            },

            {
                threshold: 0.12
            }

        );

        revealElements.forEach(function (element) {

            element.classList.add("reveal");

            revealObserver.observe(element);

        });

    } else {

        revealElements.forEach(function (element) {

            element.classList.add("active");

        });

    }


    /* =================================
       4. ACTIVE NAVIGATION LINK
    ================================= */

    const sections = document.querySelectorAll(
        "main section[id]"
    );

    const navItems = document.querySelectorAll(
        ".nav-links a"
    );

    if ("IntersectionObserver" in window) {

        const sectionObserver = new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        navItems.forEach(function (item) {

                            item.classList.remove("active-link");

                            const href = item.getAttribute("href");

                            if (href === "#" + entry.target.id) {

                                item.classList.add("active-link");

                            }

                        });

                    }

                });

            },

            {
                rootMargin: "-30% 0px -60% 0px"
            }

        );

        sections.forEach(function (section) {

            sectionObserver.observe(section);

        });

    }


    /* =================================
       5. PROFILE IMAGE ERROR HANDLING
    ================================= */

    const profileImage = document.querySelector(".profile-img");

    if (profileImage) {

        profileImage.addEventListener("error", function () {

            profileImage.alt = "Profile photo not available";

            profileImage.style.display = "none";

            const frame = profileImage.closest(".profile-frame");

            if (frame) {

                frame.style.display = "grid";
                frame.style.placeItems = "center";

                frame.textContent = "MAHESH";

                frame.style.fontFamily = "Knewave, cursive";
                frame.style.fontSize = "30px";

            }

        });

    }


    /* =================================
       6. AUTOMATIC COPYRIGHT YEAR
    ================================= */

    const copyright = document.querySelector(".footer p");

    if (copyright) {

        copyright.textContent =
            "© " + new Date().getFullYear() +
            " Mahesh. All Rights Reserved.";

    }


    /* =================================
       7. CONSOLE MESSAGE
    ================================= */

    console.log(
        "%c Welcome to Mahesh Portfolio! ",
        "background:#64E8D1;color:#212121;font-size:18px;font-weight:bold;padding:10px;"
    );

});
