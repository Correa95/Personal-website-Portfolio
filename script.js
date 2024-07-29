console.log("Hello World!");

// Contact Form Submit
const form = document.querySelector("#form");
const submitButton = document.querySelector("#submit");

// Form EventListener action
form.addEventListener("submit", (e) => {
  submitButton.disabled = true;
  e.preventDefault();
  window.location.href = window.location.origin + "/success.html";
});

// Settimeout  function
setTimeout(() => {
  window.location.href = window.location.origin;
}, 5000);
