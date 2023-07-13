window.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById("email");
    const confirmEmailInput = document.getElementById("confirm-email");
    const emailMatchMessage = document.getElementById("email-match-message");
  
    confirmEmailInput.addEventListener("input", function() {
      if (emailInput.value !== confirmEmailInput.value) {
        emailMatchMessage.textContent = "Email addresses do not match";
        confirmEmailInput.classList.add("error");
      } else {
        emailMatchMessage.textContent = "";
        confirmEmailInput.classList.remove("error");
      }
    });
  });
  