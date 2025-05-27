const form = document.getElementById("regForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log("Form submission started.");  // Log start
  message.textContent = "Submitting...";
  message.className = "message";

  // Gather form data
  const userData = {
    name: form.elements["name"].value.trim(),
    email: form.elements["email"].value.trim(),
    event: form.elements["eventSelect"].value,
  };

  console.log("User data collected:", userData);

  // Simple validation
  if (!userData.name || !userData.email || !userData.event) {
    console.warn("Validation failed: Missing fields");
    message.textContent = "Please fill all the fields.";
    message.className = "message error";
    return;
  }

  // Set a debugger breakpoint here (you can also set in DevTools)
  debugger;

  setTimeout(() => {
    console.log("Initiating fetch request...");
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
      .then(response => {
        console.log("Response received:", response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        console.log("Data from server:", data);
        message.textContent = `Success! Registered ${data.name} for ${data.event}`;
        message.className = "message success";
        form.reset();
      })
      .catch(error => {
        console.error("Fetch error:", error);
        message.textContent = "Failed to submit registration. Please try again.";
        message.className = "message error";
      });
  }, 1500);
});
