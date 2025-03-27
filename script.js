const ATTR_THEME = "theme";
const THEME_DARK_CLASS = "light";
const THEME_LIGHT_CLASS = "dark";
const formulario = document.getElementById("formulario");
const nombreError = document.getElementById("nombreError");
const emailError = document.getElementById("emailError");
const contraseniaError = document.getElementById("contraseniaError");
const confirmarContraseniaError = document.getElementById("confirmarContraseniaError");
const cambiarTema = document.getElementById("cambiarTema");
let enviable;

function ocultarErrores() {
    nombreError.style.display = "none";
    emailError.style.display = "none";
    contraseniaError.style.display = "none";
    confirmarContraseniaError.style.display = "none";
}
function mostrarError(elemento) {
    elemento.style.display = "block";
}
function comprobarTieneLetra(cadena) {
    return /[A-Za-z]/.test(cadena);
}
function comprobarTieneNumero(cadena) {
    return cadena.split("").some(caracter => !isNaN(caracter));
}

ocultarErrores();

cambiarTema.addEventListener("click", () => {
    const body = document.body;
    if (body.getAttribute(ATTR_THEME) === THEME_DARK_CLASS) {
        body.setAttribute(ATTR_THEME, THEME_LIGHT_CLASS);
        cambiarTema.innerHTML = "&#x1F31A;";
    } else {
        body.setAttribute(ATTR_THEME, THEME_DARK_CLASS);
        cambiarTema.innerHTML = "&#x1F31E;";
    }
});

// Eventos
// submit         Se envía el formulario
// change (antes) Se termina de cambiar
// input (ahora)  Se está cambiando
formulario.addEventListener("input", () => {
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const contrasenia = document.getElementById("contrasenia");
    const confirmarContrasenia = document.getElementById("confirmarContrasenia");
    let resultadoComprobacion = true;

    ocultarErrores();

    if (nombre.value.length < 3) {
        mostrarError(nombreError);
        resultadoComprobacion = false;
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
        mostrarError(emailError);
        resultadoComprobacion = false;
    }

    if (contrasenia.value.length < 8 ||
        !comprobarTieneLetra(contrasenia.value) ||
        !comprobarTieneNumero(contrasenia.value)){
        mostrarError(contraseniaError);
        resultadoComprobacion = false;
    } else if (confirmarContrasenia.value.length >= 0 &&
        contrasenia.value !== confirmarContrasenia.value) {
        mostrarError(confirmarContraseniaError);
        resultadoComprobacion = false;
    }

    enviable = resultadoComprobacion;
});
formulario.addEventListener("submit", evento => {
    if (enviable) evento.preventDefault();
});