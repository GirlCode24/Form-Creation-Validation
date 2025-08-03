const { isValidElement } = require("react");

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const passInput = document.getElementById("password");

  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passInput.value.trim();

  let isValid = true;
  let messages = [];
  if (username.length < 3) {
    isValid = false;
    messages.push("Username must be at least 3 characters long.");
  }

  if (!email.includes("@") || !email.includes(".")) {
    isValid = false;
    messages.push("Email must include both '@' and '.' characters.");
  }

  if (password.length < 8) {
    isValid = false;
    messages.push("Password must be at least 8 characters long.");
  }
  
  feedbackDiv.style.display = "block";
  if(isValid){
    feedbackDiv.textContent = "Registration Successful!";
    feedbackDiv.style.color = "#28a745";
  }
  else{
    feedbackDiv.innerHTML = messages.join("<br>");
    feedbackDiv.style.color = "#dc3545";
  }
});
