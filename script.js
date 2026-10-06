// ---------- DOM Elements ----------

const themeButton = document.getElementById("themeButton");

// ---------- Dark Mode ----------

function enableDarkMode() {
    document.body.classList.add("dark-mode");
    themeButton.textContent = "☀️";

    localStorage.setItem("theme", "dark");
}

function enableLightMode() {
    document.body.classList.remove("dark-mode");
    themeButton.textContent = "🌙";

    localStorage.setItem("theme", "light");
}

themeButton.addEventListener("click", function () {
    const isDarkMode = document.body.classList.contains("dark-mode");

    if (isDarkMode) {
        enableLightMode();
    } else {
        enableDarkMode();
    }
});

// ---------- Load Saved Theme ----------

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    enableDarkMode();
} else {
    enableLightMode();
}
