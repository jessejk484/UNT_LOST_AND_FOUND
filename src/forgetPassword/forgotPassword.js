function validateEmail() {
    event.preventDefault(); // Prevent the default form submission behavior
    const emailInput = document.getElementById("email").value;
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = "";
    errorMessage.style.display = 'none';

    if (emailInput.trim() === "") {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Please provide email address.";
    } else if (emailInput.endsWith("@my.unt.edu")) {
        errorMessage.style.display = "none";
        redirectToOTPPage(emailInput);
    } else {
        errorMessage.style.display = "block";
        errorMessage.textContent =
            "Invalid email. Only university members are authorized to access.";
    }
}

function redirectToOTPPage(email) {
    const encodedEmail = encodeURIComponent(email);
    const otpPageURL = `/Users/puppa/All_Git_Files/unt_lost_and_found/src/otpPage/otp_page.html?email=${encodedEmail}`;
    window.location.href = otpPageURL;
}