
const signupForm = document.querySelector("#signup-form");
const username = document.querySelector("#name");
const emailid = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#password-error");
const confirmPasswordError = document.querySelector("#confirm-password-error");
const successMessage = document.querySelector("#success-message");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


// Show error
function showError(fieldId, message) {
    const errorElement = document.querySelector(`#${fieldId}-error`);
    const field = document.querySelector(`#${fieldId}`);

    errorElement.textContent = message;

    field.classList.add("is-invalid");
    field.classList.remove("is-valid");
}


// Clear error
function clearError(fieldId) {
    const errorElement = document.querySelector(`#${fieldId}-error`);
    const field = document.querySelector(`#${fieldId}`);

    errorElement.textContent = "";

    field.classList.remove("is-invalid");
    field.classList.add("is-valid");
}


// =========================
// NAME VALIDATION
// =========================
username.addEventListener("input", () => {

    const value = username.value.trim();
    const fieldId = username.getAttribute("id");

    if (value.length === 0) {

        showError(fieldId, "Please enter your name.");

    } else if (value.length < 3) {

        showError(fieldId, "Name must be at least 3 characters long.");

    } else {

        clearError(fieldId);

    }
});


// =========================
// EMAIL VALIDATION
// =========================
emailid.addEventListener("input", () => {

    const value = emailid.value.trim();
    const fieldId = emailid.getAttribute("id");

    if (value.length === 0) {

        showError(fieldId, "Please enter your email.");

    } else if (!emailRegex.test(value)) {

        showError(fieldId, "Please enter a valid email address.");

    } else {

        clearError(fieldId);

    }
});


// =========================
// PASSWORD VALIDATION
// =========================
password.addEventListener("input", () => {

    const value = password.value.trim();
    const fieldId = password.getAttribute("id");

    if (value.length === 0) {

        showError(fieldId, "Please enter your password.");

    } else if (value.length < 8) {

        showError(
            fieldId,
            "Password must be at least 8 characters long."
        );

    } else {

        clearError(fieldId);

    }

    // Validate confirm password again
    if (confirmPassword.value.trim() !== "") {

        const confirmValue = confirmPassword.value.trim();

        if (confirmValue !== value) {

            showError(
                "confirm-password",
                "Passwords do not match."
            );

        } else {

            clearError("confirm-password");

        }
    }
});


// =========================
// CONFIRM PASSWORD
// =========================
confirmPassword.addEventListener("input", () => {

    const value = confirmPassword.value.trim();
    const fieldId = confirmPassword.getAttribute("id");

    if (value.length === 0) {

        showError(
            fieldId,
            "Please confirm your password."
        );

    } else if (value !== password.value.trim()) {

        showError(
            fieldId,
            "Passwords do not match."
        );

    } else {

        clearError(fieldId);

    }
});


// =========================
// FORM SUBMIT
// =========================
signupForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const nameValue = username.value.trim();
    const emailValue = emailid.value.trim();
    const passwordValue = password.value.trim();
    const confirmValue = confirmPassword.value.trim();

    let isValid = true;


    // Name
    if (nameValue.length === 0) {

        showError("name", "Please enter your name.");
        isValid = false;

    } else if (nameValue.length < 3) {

        showError(
            "name",
            "Name must be at least 3 characters long."
        );

        isValid = false;

    } else {

        clearError("name");

    }


    // Email
    if (emailValue.length === 0) {

        showError("email", "Please enter your email.");
        isValid = false;

    } else if (!emailRegex.test(emailValue)) {

        showError(
            "email",
            "Please enter a valid email address."
        );

        isValid = false;

    } else {

        clearError("email");

    }


    // Password
    if (passwordValue.length === 0) {

        showError(
            "password",
            "Please enter your password."
        );

        isValid = false;

    } else if (passwordValue.length < 8) {

        showError(
            "password",
            "Password must be at least 8 characters long."
        );

        isValid = false;

    } else {

        clearError("password");

    }


    // Confirm password
    if (confirmValue.length === 0) {

        showError(
            "confirm-password",
            "Please confirm your password."
        );

        isValid = false;

    } else if (confirmValue !== passwordValue) {

        showError(
            "confirm-password",
            "Passwords do not match."
        );

        isValid = false;

    } else {

        clearError("confirm-password");

    }


    // Success
    if (isValid) {

        successMessage.textContent =
            "Account created successfully!";

        signupForm.reset();

        // Remove green validation borders after reset
        username.classList.remove("is-valid");
        emailid.classList.remove("is-valid");
        password.classList.remove("is-valid");
        confirmPassword.classList.remove("is-valid");

    } else {

        successMessage.textContent = "";

    }

});

