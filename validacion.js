//Haz tú validación en javascript acá
const form = document.querySelector(".formcontato__form");
const inputName = document.getElementById("form__name");
const inputEmail = document.getElementById("form__email");
const inputAsunto = document.getElementById("form__asunto");
const textarea = document.getElementById("mensagem");
const btnEnviar = document.getElementById("form__boton");


let res = document.createElement("div");

inputName.addEventListener("keyup",e=>{
    if(e.currentTarget.value === ""){
        btnEnviar.disabled = true;
    }else{
        btnEnviar.disabled = false;
        btnEnviar.style.cursor = "pointer";
    }
});

inputEmail.addEventListener("keyup",e=>{
    if(e.currentTarget.value === "" && (inputEmail.value.indexOf("@")==-1 && inputEmail.value.indexOf(".")==-1) ){
        btnEnviar.disabled = true;
        res.innerHTML = `<p class="formcontato__resultado"> EMAIL DEBE CONTENER "@" y "." ❌ <p>`;
        return form.append(res)
    }else{
        btnEnviar.disabled = false;
        btnEnviar.style.cursor = "pointer";
    }
});


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