//Haz tú validación en javascript acá
const form = document.querySelector(".formcontato__form");
const inputName = document.getElementById("form__name");
const inputEmail = document.getElementById("form__email");
const inputAsunto = document.getElementById("form__asunto");
const textarea = document.getElementById("mensagem");
const btnEnviar = document.getElementById("form__boton");

let res = document.createElement("div");

form.addEventListener("input",e=>{
    if(inputName.value.length > 0 && inputEmail.value.length > 0 && inputAsunto.value.length > 0 && textarea.value.length > 0){
        btnEnviar.disabled = false;
        btnEnviar.style.cursor = "pointer";
    }else{
        btnEnviar.disabled = true;
        btnEnviar.style.removeProperty("cursor");
    }
});


// inputName.addEventListener("keyup",e=>{
//     let value =e.currentTarget.value
//     if(value === "" || value.length > 50){
//         btnEnviar.disabled = true;
//         btnEnviar.style.cursor = "unset";
//     }else{
//         btnEnviar.disabled = false;
//         btnEnviar.style.cursor = "pointer";
//     }
// });




// form.addEventListener("submit", e =>{
//     e.preventDefault();
//     res.innerHTML="";
//     /* validaciones name */
//     if(inputName.value === null || inputName.value === ""){
//         res.innerHTML = `<p class="formcontato__resultado">EL NOMBRE NO PUEDE ESTAR VACIO ❌ <p>`;
//         return form.append(res);
//     }
//     else if(inputName.value.length > 10){
//         res.innerHTML = `<p class="formcontato__resultado">EL NOMBRE DEBE CONTENER MAS DE 50 CARACTERES ❌ <p>`;
//         return form.append(res);
//     }
//     /* validaciones email */
//     else if(inputEmail.value == null || inputEmail.value === ""){
//         res.innerHTML = `<p class="formcontato__resultado">EL EMAIL NO PUEDE ESTAR VACIO ❌ <p>`;
//         return form.append(res);
//     }
//     else if(inputEmail.value.indexOf("@")==-1 && inputEmail.value.indexOf(".")==-1){
//         res.innerHTML = `<p class="formcontato__resultado"> EMAIL DEBE CONTENER "@" y "." ❌ <p>`;
//         return form.append(res);
//     }
//     /* validaciones asunto */
//     else if(inputAsunto.value === null || inputAsunto.value === ""){
//         res.innerHTML = `<p class="formcontato__resultado">EL ASUNTO NO PUEDE ESTAR VACIO ❌ <p>`;
//         return form.append(res);
//     }
//     else if(inputAsunto.value.length > 50){
//         res.innerHTML = `<p class="formcontato__resultado">EL ASUNTO DEBE CONTENER MAS DE 50 CARACTERES❌ <p>`;
//         return form.append(res);
//     }
//     /* validaciones mensaje */
//     else if(textarea.value === null || textarea.value === ""){
//         res.innerHTML = `<p class="formcontato__resultado">EL MENSAJE NO PUEDE ESTAR VACIO ❌ <p>`;
//         return form.append(res);
//     }
//     else if(textarea.value.length > 30){
//         res.innerHTML = `<p class="formcontato__resultado">EL ASUNTO DEBE CONTENER MAS DE 300 CARACTERES❌ <p>`;
//         return form.append(res);
//     }
// })