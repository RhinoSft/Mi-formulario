function validateForm() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();
    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
    var isValid = true;

    nameError.innerHTML = "";
    emailError.innerHTML = "";
    passwordError.innerHTML = "";

    if (name === "") {
        nameError.innerHTML = "Por favor, ingrese su nombre.";
        isValid = false;
    }

    if (email === "") {
        emailError.innerHTML = "Por favor, ingrese su correo electrónico.";
        isValid = false;
    } else if (!validateEmail(email)) {
        emailError.innerHTML = "Por favor, ingrese un correo electrónico válido.";
        isValid = false;
    }

    if (password === "") {
        passwordError.innerHTML = "Por favor, ingrese su contraseña.";
        isValid = false;
    } else if (password.length < 6) {
        passwordError.innerHTML = "La contraseña debe tener al menos 6 caracteres.";
        isValid = false;
    }

    return isValid;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
