"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.getElementById("themeButton");
    const navToggle = document.getElementById("navToggle");
    const primaryNav = document.getElementById("primaryNav");
    const currentYear = document.getElementById("currentYear");

    // Update copyright year.
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // Theme management.
    const applyTheme = (theme) => {
        const isDark = theme === "dark";

        document.body.classList.toggle("dark-theme", isDark);

        if (themeButton) {
            themeButton.textContent = isDark ? "☀" : "☾";

            themeButton.setAttribute(
                "aria-label",
                isDark ? "Switch to light theme" : "Switch to dark theme"
            );
        }
    };

    let savedTheme = "light";

    try {
        savedTheme = localStorage.getItem("portfolio-theme") || "light";
    } catch {
        // Continue with the default theme if storage is unavailable.
    }

    applyTheme(savedTheme);

    themeButton?.addEventListener("click", () => {
        const nextTheme = document.body.classList.contains("dark-theme")
            ? "light"
            : "dark";

        applyTheme(nextTheme);

        try {
            localStorage.setItem("portfolio-theme", nextTheme);
        } catch {
            // The theme still works for the current page session.
        }
    });

    // Mobile navigation.
    const closeNavigation = () => {
        primaryNav?.classList.remove("is-open");
        navToggle?.setAttribute("aria-expanded", "false");
        navToggle?.setAttribute("aria-label", "Open navigation");
    };

    navToggle?.addEventListener("click", () => {
        const isOpen = primaryNav?.classList.toggle("is-open") ?? false;

        navToggle.setAttribute("aria-expanded", String(isOpen));
        navToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );
    });

    primaryNav?.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeNavigation);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeNavigation();
        }
    });

    // Close the mobile menu if the viewport becomes desktop-sized.
    window.addEventListener("resize", () => {
        if (window.innerWidth > 760) {
            closeNavigation();
        }
    });
});