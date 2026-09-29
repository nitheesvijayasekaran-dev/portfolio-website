// ---------- DOM Elements ----------

const contactForm = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

const successMessage = document.getElementById("successMessage");

const themeButton = document.getElementById("themeButton");


// ---------- Reusable Functions ----------

function showError(element, message) {
    element.textContent = message;
}

function clearError(element) {
    element.textContent = "";
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


// ---------- Form Validation ----------

function validateForm() {
    let isValid = true;

    clearError(nameError);
    clearError(emailError);
    clearError(messageError);
    successMessage.textContent = "";

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name === "") {
        showError(nameError, "Please enter your name.");
        isValid = false;
    }

    if (email === "") {
        showError(emailError, "Please enter your email.");
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError(emailError, "Please enter a valid email address.");
        isValid = false;
    }

    if (message === "") {
        showError(messageError, "Please enter a message.");
        isValid = false;
    } else if (message.length < 10) {
        showError(
            messageError,
            "Message should contain at least 10 characters."
        );
        isValid = false;
    }

    return isValid;
}


// ---------- Form Submit ----------

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!validateForm()) {
        return;
    }

    const name = nameInput.value.trim();

    successMessage.textContent =
        `Thank you, ${name}! Your message has been submitted successfully.`;

    // Save user's name in Local Storage
    localStorage.setItem("visitorName", name);

    contactForm.reset();
});


// ---------- Real-time Validation ----------

nameInput.addEventListener("input", function () {
    if (nameInput.value.trim() !== "") {
        clearError(nameError);
    }
});

emailInput.addEventListener("input", function () {
    const email = emailInput.value.trim();

    if (email !== "" && isValidEmail(email)) {
        clearError(emailError);
    }
});

messageInput.addEventListener("input", function () {
    if (messageInput.value.trim().length >= 10) {
        clearError(messageError);
    }
});


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


// ---------- Welcome Message ----------

const savedVisitorName = localStorage.getItem("visitorName");

if (savedVisitorName) {
    console.log(`Welcome back, ${savedVisitorName}!`);
}