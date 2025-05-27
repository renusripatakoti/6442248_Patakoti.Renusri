const form = document.getElementById("regForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  message.textContent = "Submitting...";
  message.className = "message";

  // Prepare user data from form
  const userData = {
    name: form.elements["name"].value.trim(),
    email: form.elements["email"].value.trim(),
    event: form.elements["eventSelect"].value,
  };

  // Simple client-side validation
  if (!userData.name || !userData.email || !userData.event) {
    message.textContent = "Please fill all the fields.";
    message.className = "message error";
    return;
  }

  // Simulate delayed fetch with setTimeout and fetch to a mock API
  setTimeout(() => {
    // Mock API endpoint that echoes back data
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
      .then(response => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then(data => {
        message.textContent = `Success! Registered ${data.name} for ${data.event}`;
        message.className = "message success";
        form.reset();
      })
      .catch(error => {
        message.textContent = "Failed to submit registration. Please try again.";
        message.className = "message error";
        console.error("Fetch error:", error);
      });
  }, 1500); // 1.5 seconds delay
});
