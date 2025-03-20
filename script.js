const formulario = document.getElementById("formulario");
const nombreCompleto = document.getElementById("nombreCompleto");
const email = document.getElementById("email");
const contrasenia = document.getElementById("contrasenia");
const confirmarContrasenia = document.getElementById("confirmarContrasenia");

function comprobarTieneNumero(cadena) {
    return cadena.includes(caracter => !isNaN(caracter));
}

function comprobarTieneLetra(cadena) {
    return cadena.includes(caracter => /^[A-Za-z]$/.test(caracter));
}

function comprobarEmail(cadena) {
    return cadena.includes(caracter => caracter === '@');
}

formulario.addEventListener("change", () => {
    alert(email.value)
    alert(comprobarEmail(email.value));


    /*if (nombreCompleto.value.length < 3) {
        alert("Nombre inválido");
    }

    if (!comprobarEmail(email.value)) {
        alert("E-mail inválido");
    }

    alert(contrasenia.value);
    if (contrasenia.value.length < 8 || !comprobarTieneLetra(contrasenia.value) || !comprobarTieneNumero(contrasenia.value)){
        alert("Contraseña Invalida")
    } else if (confirmarContrasenia.value.length >= 0 && contrasenia.value === confirmarContrasenia.value) {
        alert("Contraseñas no coinciden");
    }*/
});
formulario.addEventListener("submit", evento => {
    evento.preventDefault();
});