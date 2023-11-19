function redirectToDashboardPage() {
    event.preventDefault(); // Prevent the default form submission behavior
    var login_mail = document.getElementById("login_mail").value
    var login_pwd = document.getElementById("login_pwd_id").value
    var errorMessage = document.getElementById('error-message1');
    var successMessage = document.getElementById('success-message1');
    var message = "";
    var valid = 0;
    errorMessage.textContent = "";
    successMessage.textContent = "";
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';
    if (login_mail.trim() === "" || login_pwd.trim() == "") {
        // errorMessage.textContent = "Please provide email address, password."
        // errorMessage.style.display = "block"
        message = "Please provide email address, password."
        valid = 1;
    } else if (!login_mail.endsWith("@my.unt.edu")) {
        //errorMessage.style.display = "none";
        // errorMessage.textContent = "Invalid email. Only university members are authorized to access.";
        // errorMessage.style.display = "block";
        message = "Invalid email. Only university members are authorized to access.";
        valid = 1;
        //redirectToOTPPage(emailInput);
    }
    else {
        if (checkAuthorization(login_mail, login_pwd)) {
            // window.location.href = "dashboard.html";
            valid = -1;
        }
        else {
            // errorMessage.textContent = "Invalid login credentials. Please try again";
            // errorMessage.style.display = "block";
            message = "Invalid login credentials. Please try again."
            valid = 1;
        }
    }
    // console.log(valid);
    // console.log(message);
    if (valid == 1) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }
    else if (valid == -1) {
        successMessage.textContent = message;
        successMessage.style.display = 'block';
        window.location.href = '/Users/puppa/All_Git_Files/unt_lost_and_found/src/dashboard/dashboard.html';
        // setTimeout(function() {
        // 		window.location.href = 'dashboard.html';
        // }, 3000);
    }
}
function checkAuthorization(login_mail, login_pwd) {
    // Write code backend for authentication.
    return true;
}
function redirectToLoginPage() {
    event.preventDefault(); // Prevent the default form submission behavior
    var sign_mail = document.getElementById("sign_mail").value
    var sign_pwd = document.getElementById("sign_pwd_id").value
    var sign_user_id = document.getElementById("sign_id").value
    var errorMessage = document.getElementById('error-message');
    var successMessage = document.getElementById('success-message');
    var message = "";
    errorMessage.textContent = "";
    successMessage.textContent = "";
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';
    var valid = 0;
    if (sign_mail.trim() == "" || sign_pwd.trim() == "" || sign_user_id.trim() == "") {
        message = "Please provide email address, password and user id."
        valid = 1;
    } else if (!sign_mail.endsWith("@my.unt.edu")) {
        message = "Invalid email. Only university members are authorized to access.";
        valid = 1;
    }
    else {
        if (registerDetails(sign_mail, sign_pwd, sign_user_id)) {
            message = "You have successfully registered for university LOST and Found. Please login";
            valid = -1;
        }
    }
    // console.log(valid)
    // console.log(message)
    if (valid == 1) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }
    else if (valid == -1) {
        // successMessage.textContent = message;
        // successMessage.style.display = 'block';
        setTimeout(function () {
            window.location.href = 'login.html';
        }, 3000);
    }
}
function registerDetails(sign_mail, sign_pwd, sign_user_id) {
    // Write code for backend integration and storing details.
    event.preventDefault(); // Prevent the default form submission behavior
    var regex = /^(?=(?:\D*\d){1})(?=(?:[a-zA-Z]*[^a-zA-Z]){1})(?=(?:\w{7,})).*$/;
    var isValid = regex.test(sign_pwd);
    var errorMessage = document.getElementById('error-message');
    var successMessage = document.getElementById('success-message');
    if (!isValid) {
        errorMessage.textContent = "Please provide the valid password of length 7, which consists of atleast 5 words with 1 numeric and special char"
        errorMessage.style.display = 'block';
    }
    else {
        successMessage.textContent = 'You have successfully registered for university LOST and Found. Please login';
        successMessage.style.display = 'block';
        return true;
    }
    return false;
}