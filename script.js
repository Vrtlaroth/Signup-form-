const form = document.querySelector('#form');
const inputContainer = document.querySelectorAll('.input-ctn');
const inputs = form.querySelectorAll('.input');
const submit = form.querySelector('secondary');

const firstName = form.querySelector('#fName');
const lastName = form.querySelector('#LName');
const email = form.querySelector('#email');
const password = form.querySelector('#password');

function setError(element, message) {
    element.parentElement.classList.add('error');
    element.parentElement.lastElementChild.textContent = `${message}`;
}

function setSuccess(element) {
    element.parentElement.classList.remove('error');
}

function validateInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    let allValid = true;

    if (firstNameValue.length === 0) {
        setError(firstName, "First Name cannot be empty");
        allValid = false;
    } else {
        setSuccess(firstName);
    }
    if (lastNameValue.length === 0) {
        setError(lastName, "Last Name cannot be empty");
        allValid = false;
    } else {
        setSuccess(lastName);
    }

    if (emailValue.length === 0) {
        setError(email, "Email cannot be empty");
        allValid = false;
    } else if (!validateEmail(emailValue)) {
        setError(email, "Looks like this is not an email");
        allValid = false;
    } else {
        setSuccess(email);
    }

    if (passwordValue.length === 0) {
        setError(password, "Password cannot be empty");
        allValid = false;
    } else {
        setSuccess(password);
    }
    if (allValid) {
        form.submit();
    }
}

form.addEventListener("submit", e => {
    e.preventDefault();
    validateInputs();
});