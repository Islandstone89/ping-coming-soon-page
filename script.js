
let form = document.querySelector(".form");
let input = document.querySelector(".input");
let errorMessage = document.querySelector(".error-message");

let btn = document.querySelector(".btn");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(input.validity);
    if(input.value === "") {
        errorMessage.style.display = "block";
    }
    if(input.typeMismatch) {
        errorMessage.textContent = "Does this work?"
    }
})

console.log(input.validity);
