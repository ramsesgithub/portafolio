//Haz tú validación en javascript acá
const form = document.querySelector(".formcontato__form");
const inputName = document.querySelector(".formcontato__input");
form.addEventListener("submit",e=>{
    e.preventDefault() //evitar que se recargue la pagina
    if(inputName.value.length > 50)console.log("error");
})