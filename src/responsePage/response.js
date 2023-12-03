function redirectToLoginPage() {
    setTimeout(function () {
        window.location.href = '/Users/puppa/All_Git_Files/unt_lost_and_found/src/dashboard/dashboard.html';
    }, 3000);
}
document.addEventListener('DOMContentLoaded', function () {
    //document.addEventListener('DOMContentLoaded', function () {
    const loginBtn = document.querySelector('.js-login-button');

    const loginModal = document.querySelector('.js-login-modal');

    loginBtn.addEventListener('click', () => {
        console.log("Entered")
        const isOpen = loginModal.classList.contains('is-open');

        if (isOpen) {

            loginModal.classList.remove('is-open');

        }

        else {

            loginModal.classList.add('is-open');

        }

    });
});