// function submitPassword() {
//   const newPassword = document.getElementById('newPassword').value;
//   const confirmPassword = document.getElementById('confirmPassword').value;
//   const errorMessage = document.getElementById('error-message');
//   const successMessage = document.getElementById('success-message');

//   if (newPassword !== confirmPassword) {
//     errorMessage.textContent = 'Passwords do not match. Please retry again';
//     errorMessage.style.display = 'block';
//   } else {
//     successMessage.textContent = 'Your password has been changed successfully. Please try to login';
//     successMessage.style.display = 'block';
//     redirectToLoginPage();
//   }
// }

function redirectToLoginPage() {
    setTimeout(function () {
        window.location.href = '/Users/puppa/All_Git_Files/unt_lost_and_found/src/loginPage/login.html';
    }, 3000);
}
function submitPassword() {
    event.preventDefault(); // Prevent the default form submission behavior
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');
    errorMessage.textContent = "";
    successMessage.textContent = "";
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';

    if (newPassword.trim() === "") {
        errorMessage.textContent = 'Please type your new password';
        errorMessage.style.display = 'block';
    }
    else if (confirmPassword.trim() == "") {
        errorMessage.textContent = 'Please type confirm password';
        errorMessage.style.display = 'block';
    }
    else if (newPassword !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match. Please retry again';
        errorMessage.style.display = 'block';
    }
    else {
        var regex = /^(?=(?:\D*\d){1})(?=(?:[a-zA-Z]*[^a-zA-Z]){1})(?=(?:\w{7,})).*$/;
        var isValid = regex.test(newPassword);
        if (!isValid) {
            errorMessage.textContent = "Please provide the valid password of length 7, which consists of atleast 5 words with 1 numeric and special char"
            errorMessage.style.display = 'block';
        }
        else {
            successMessage.textContent = 'Your password has been changed successfully. You will be redirected to login page in 5 seconds.';
            successMessage.style.display = 'block';
            redirectToLoginPage();
        }
    }
}