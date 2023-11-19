function submitOTP() {
    event.preventDefault(); // Prevent the default form submission behavior
    const otpInput = document.getElementById("otp").value;
    const errorMessage = document.getElementById("error-message");
    const otpPattern = /^\d{6}$/;
    errorMessage.textContent = "";
    errorMessage.style.display = 'none';

    if (!otpPattern.test(otpInput)) {
        errorMessage.textContent = "Please provide a valid OTP (6 digits).";
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
        redirectToChangePassword();
    }
}

function redirectToChangePassword() {
    window.location.href = "/Users/puppa/All_Git_Files/unt_lost_and_found/src/changePassword/change_password.html";
}