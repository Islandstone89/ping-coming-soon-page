
let form = document.querySelector(".form");
let emailInput = document.querySelector(".input");
let errorMessage = document.querySelector(".error-message");

form.addEventListener("submit", (e) => {
    e.preventDefault()

    if(emailInput.value === "") {
        emailInput.style.borderColor = "var(--clr-dark-red)";
        errorMessage.style.display = "block";
        errorMessage.textContent = "Whoops! It looks like you forgot to add your email";
    }

    else if (emailInput.value.indexOf("@") === -1) {
        emailInput.style.borderColor = "var(--clr-dark-red)";
        errorMessage.style.display = "block";
        errorMessage.textContent = "Please provide an valid email address";
    }

    else  {
        emailInput.style.borderColor = "green";
        errorMessage.style.display = "none";
    } 
}
)
