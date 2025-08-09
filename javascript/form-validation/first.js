let passwordInput = document.querySelector("#password");
let form = document.querySelector("form");
let emailInput = document.querySelector("#email");



form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Reset error display
  document.querySelector("#emailError").style.display = "none";
  document.querySelector("#passwordError").style.display = "none";

  // Email pattern
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Password pattern (Min 8 chars, 1 uppercase, 1 lowercase, 1 digit, 1 special char)
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  let emailValid = emailRegex.test(emailInput.value);
  let passwordValid = passwordRegex.test(passwordInput.value);

  let isValid = true;
  
  if (!emailValid) {
    document.querySelector("#emailError").textContent = "Email is incorrect";
    document.querySelector("#emailError").style.display = "initial";
  }

  if (!passwordValid) {
    document.querySelector("#passwordError").textContent = "Password is incorrect";
    document.querySelector("#passwordError").style.display = "initial";
  }


  if(isValid) {
    document.querySelector("#resultMessage").textContent = "Every thing is correct";
  }
});
