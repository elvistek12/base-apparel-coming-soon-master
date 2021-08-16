let formulario = document.querySelector(".formulario");
let input = document.querySelector(".email");

const correo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

let campoCorreo = false;

const comprobarFormulario = (e) => {
  if (correo.test(e.target.value)) {
    document.querySelector(".email").classList.remove("email-error");
    document.querySelector(".error").classList.remove("error-activo");
    document.querySelector(".contenedor-parrafo-error").classList.remove("contenedor-parrafo-error-activo");
    campoCorreo = true;
  } else {
    document.querySelector(".email").classList.add("email-error");
    document.querySelector(".error").classList.add("error-activo");
    document.querySelector(".contenedor-parrafo-error").classList.add("contenedor-parrafo-error-activo");
    campoCorreo = false;
  }
};

input.addEventListener("keyup", comprobarFormulario, false);
input.addEventListener("blur", comprobarFormulario, false);

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  if (campoCorreo) {
    formulario.reset();
  }
});