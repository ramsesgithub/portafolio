//Haz tú validación en javascript acá
const form = document.querySelector(".formcontato__form");
const inputName = document.getElementById("form__name");
const inputEmail = document.getElementById("form__email");
const inputAsunto = document.getElementById("form__asunto");
const textarea = document.getElementById("message");
const btnEnviar = document.getElementById("form__boton");

let res = document.createElement("div");

form.addEventListener("input",e=>{
    let value = inputName.value.length > 0 && inputEmail.value.length > 0 && inputAsunto.value.length > 0 && textarea.value.length > 0;
    let limitCharacters = inputName.value.length < 50 && inputAsunto.value.length < 50 && textarea.value.length < 300;
    let emailValid = inputEmail.value.indexOf("@")!==-1 && inputEmail.value.indexOf(".")!==-1;
    if(value && limitCharacters && emailValid){
        btnEnviar.disabled = false;
        btnEnviar.style.cursor = "pointer";
    }else{
        btnEnviar.disabled = true;
        btnEnviar.style.removeProperty("cursor");
    }
});




/* Email JS */

document.querySelector('.formcontato__form').addEventListener('submit', function(event) {
    event.preventDefault();
    btnEnviar.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_81v0kum';

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        btnEnviar.value = 'Send Email';
        /* Sweealert */
        Swal.fire({
            position: 'top-mid',
            icon: 'success',
            title: 'Mensaje enviado correctamente',
            showConfirmButton: false,
            timer: 2500
        });
    }, (err) => {
        btnEnviar.value = 'Send Email';
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Hubo un error, Verificar el mensaje',
            timer: 2500
        });
    });
});




const valida = input =>{
    const tipoDeInput = input.dataset.tipo;
    //validar si en campo es valido y mostrar mennsaje
    if(input.validity.valid){
        input.parentElement.classList.remove("formcontato__form__container--invalid");
        input.parentElement.querySelector(".formcontato__input--error").innerHTML="";
    }else{
        input.parentElement.classList.add("formcontato__form__container--invalid");
        input.parentElement.querySelector(".formcontato__input--error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"
];

const mensajesDeError = {
    nombre:{valueMissing: "El campo nombre no puede estar vacio",patternMismatch:"El nombre debe contener 3 a 50 caracteres"},
    email:{valueMissing: "El campo email no puede estar vacio",typeMismatch:"El correo no es valido"},
    asunto:{valueMissing:"El campo asunto no puede estar vacio",patternMismatch:"El asunto debe contener 3 a 30 caracteres"},
    mensaje:{valueMissing:"El campo estado no puede estar vacio",patternMismatch:"El mensaje debe contener 10 a 300 caracteres"},
}

const mostrarMensajeDeError = (tipoDeInput, input) => {
    let mensaje = "";
    tipoDeErrores.forEach(error =>{
        if(input.validity[error]){
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje;
}

const inputs = document.querySelectorAll(".input");

inputs.forEach(input => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    })
})

