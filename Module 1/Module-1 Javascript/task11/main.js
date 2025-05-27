const form = document.getElementById("regForm");
const nameInput = form.elements["name"];
const emailInput = form.elements["email"];
const eventSelect = form.elements["eventSelect"];

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const eventError = document.getElementById("eventError");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form default submission

  // Clear previous errors and messages
  nameError.textContent = "";
  emailError.textContent = "";
  eventError.textContent = "";
  message.textContent = "";
  message.className = "";

  let valid = true;

  // Validate Name
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  }

  // Validate Email (simple regex)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email is required.";
    valid = false;
  } else if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Please enter a valid email.";
    valid = false;
  }

  // Validate Event Selection
  if (eventSelect.value === "") {
    eventError.textContent = "Please select an event.";
    valid = false;
  }

  if (valid) {
    message.textContent = `Thank you, ${nameInput.value.trim()}, for registering for ${eventSelect.value}!`;
    message.className = "success";

    // Optional: reset form
    form.reset();
  }
});
