const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const contrasenia = document.getElementById("contrasenia");
const confirmarContrasenia = document.getElementById("confirmarContrasenia");
let enviable;

function comprobarTieneLetra(cadena) {
    return /[A-Za-z]/.test(cadena);
}
function comprobarTieneNumero(cadena) {
    return cadena.split("").some(caracter => !isNaN(caracter));
}

// Eventos
// submit         Se envía el formulario
// change (antes) Se termina de cambiar
// input (ahora)  Se está cambiando
formulario.addEventListener("input", () => {
    if (nombre.value.length < 3) {
        console.error("Nombre inválido");
    }

    /*
      Aparentemente, el includes lo estabamos usando mal... (upsis)
      includes
      |-> Busca si el parametro está en la cadena/vector
      \-> Acepta un parametro donde debe estar
      some
      |-> Este es el que creia que estabamos usando. este acepta funciones que
      |   chequean condiciones
      \-> Solo acepta arrays
      BONUS: Si queres que te devuelva directamente en string que estás
      buscando en un array: find para que te de varias opciones y findOne para
      que solo sea una.
    */
    if (!email.value.includes("@")) {
        console.log("E-mail inválido", email.value.includes("@"));
    }

    if (contrasenia.value.length < 8 ||
        !comprobarTieneLetra(contrasenia.value) ||
        !comprobarTieneNumero(contrasenia.value)){
        console.error("Contraseña Invalida");
    } else if (confirmarContrasenia.value.length >= 0 &&
        contrasenia.value === confirmarContrasenia.value) {
        console.error("Contraseñas no coinciden");
    }
});
formulario.addEventListener("submit", evento => {
    evento.preventDefault();
});