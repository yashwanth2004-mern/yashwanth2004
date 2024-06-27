function validateForm() {
    let isValid = true;

    // Clear all previous error messages
    document.querySelectorAll('.error').forEach(el => el.style.display = 'none');

    // Validate First Name
    let firstName = document.getElementById('firstName').value;
    if (firstName === "") {
        document.getElementById('firstNameError').style.display = 'inline';
        isValid = false;
    }

    // Validate Last Name
    let lastName = document.getElementById('lastName').value;
    if (lastName === "") {
        document.getElementById('lastNameError').style.display = 'inline';
        isValid = false;
    }

    // Validate Email
    let email = document.getElementById('email').value;
    if (email === "" || !validateEmail(email)) {
        document.getElementById('emailError').style.display = 'inline';
        isValid = false;
    }

    // Validate Password
    let password = document.getElementById('password').value;
    if (password === "") {
        document.getElementById('passwordError').style.display = 'inline';
        isValid = false;
    }

    // Validate Confirm Password
    let confirmPassword = document.getElementById('confirmPassword').value;
    if (confirmPassword === "" || password !== confirmPassword) {
        document.getElementById('confirmPasswordError').style.display = 'inline';
        isValid = false;
    }

    // Validate Gender
    let gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.getElementById('genderError').style.display = 'inline';
        isValid = false;
    }

    // Validate Age
    let age = document.getElementById('age').value;
    if (age === "") {
        document.getElementById('ageError').style.display = 'inline';
        isValid = false;
    }

    // Validate Phone Number
    let phoneNumber = document.getElementById('phoneNumber').value;
    if (phoneNumber === "") {
        document.getElementById('phoneNumberError').style.display = 'inline';
        isValid = false;
    }

    // Validate Address
    let address = document.getElementById('address').value;
    if (address === "") {
        document.getElementById('addressError').style.display = 'inline';
        isValid = false;
    }

    // Validate State
    let state = document.getElementById('state').value;
    if (state === "") {
        document.getElementById('stateError').style.display = 'inline';
        isValid = false;
    }

    // Validate Country
    let country = document.getElementById('country').value;
    if (country === "") {
        document.getElementById('countryError').style.display = 'inline';
        isValid = false;
    }

    // Validate Languages
    let languages = document.querySelectorAll('input[name="languages"]:checked');
    if (languages.length === 0) {
        document.getElementById('languagesError').style.display = 'inline';
        isValid = false;
    }

    // Validate Declaration
    let declaration = document.getElementById('declaration').checked;
    if (!declaration) {
        document.getElementById('declarationError').style.display = 'inline';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}
