const TRUE = "1";
const FALSE = "0";
const ATTR_VALID = "valid";
const ATTR_THEME = "theme";
const THEME_DARK_CLASS = "light";
const THEME_LIGHT_CLASS = "dark";
const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const contrasenia = document.getElementById("contrasenia");
const confirmarContrasenia = document.getElementById("confirmarContrasenia");
const cambiarTema = document.getElementById("cambiarTema");
let contraseniaValida = false;


function mostrarError(elemento) {
    elemento.style.display = "block";
}
function comprobarTieneLetra(cadena) {
    return /[A-Za-z]/.test(cadena);
}
function comprobarTieneNumero(cadena) {
    return cadena.split("").some(caracter => !isNaN(caracter));
}
function validarTodo() {
    return formulario.elements.some(input => input.hasAttribute(ATTR_VALID) && input.getAttribute(ATTR_VALID) === TRUE);
}

cambiarTema.addEventListener("click", () => {
    const body = document.body;
    if (body.getAttribute(ATTR_THEME) === THEME_DARK_CLASS) {
        body.setAttribute(ATTR_THEME, THEME_LIGHT_CLASS);
        cambiarTema.innerHTML = "&#x1F31E;";
    } else {
        body.setAttribute(ATTR_THEME, THEME_DARK_CLASS);
        cambiarTema.innerHTML = "&#x1F31A;";
    }
});

// Eventos
// submit         Se envía el formulario
// change (antes) Se termina de cambiar
// input (ahora)  Se está cambiando
nombre.addEventListener("input", () => {
    if (nombre.value.length < 3)
        nombre.setAttribute(ATTR_VALID, FALSE);
    else
        nombre.setAttribute(ATTR_VALID, TRUE);
});
email.addEventListener("input", () => {
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
    if (email.value.includes("@"))
        email.setAttribute(ATTR_VALID, TRUE);
    else
        email.setAttribute(ATTR_VALID, FALSE);        
});
contrasenia.addEventListener("input", () => {
    contraseniaValida = contrasenia.value.length >= 8 &&
        comprobarTieneLetra(contrasenia.value) &&
        comprobarTieneNumero(contrasenia.value);
    
    if (contraseniaValida)
        contrasenia.setAttribute(ATTR_VALID, TRUE);
    else
        contrasenia.setAttribute(ATTR_VALID, FALSE);
});
confirmarContrasenia.addEventListener("input", () => {
    if (contraseniaValida && confirmarContrasenia.value.length >= 0 &&
        contrasenia.value === confirmarContrasenia.value)
        confirmarContrasenia.setAttribute(ATTR_VALID, TRUE);
    else
        confirmarContrasenia.setAttribute(ATTR_VALID, FALSE); 
});
formulario.addEventListener("submit", evento => {
    if (validarTodo()) {
        evento.preventDefault();
    }
});