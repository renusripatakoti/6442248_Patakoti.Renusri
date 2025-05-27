// Sample Events
const events = [
  { name: "Yoga Retreat", category: "Health", seats: 3 },
  { name: "Code Jam", category: "Tech", seats: 5 },
  { name: "Music Night", category: "Music", seats: 0 }
];

// Access DOM using querySelector()
const container = document.querySelector("#eventsContainer");

// Render all event cards
function renderEvents() {
  container.innerHTML = ""; // Clear previous render

  events.forEach((event, index) => {
    const card = document.createElement("div");
    card.className = "card";

    const title = document.createElement("h3");
    title.textContent = event.name;

    const info = document.createElement("p");
    info.textContent = `Category: ${event.category} | Seats: ${event.seats}`;

    const registerBtn = document.createElement("button");
    registerBtn.textContent = "Register";
    registerBtn.disabled = event.seats === 0;
    registerBtn.onclick = () => {
      if (events[index].seats > 0) {
        events[index].seats--;
        renderEvents(); // Update UI
      }
    };

    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.onclick = () => {
      events[index].seats++;
      renderEvents(); // Update UI
    };

    card.appendChild(title);
    card.appendChild(info);
    card.appendChild(registerBtn);
    card.appendChild(cancelBtn);
    container.appendChild(card);
  });
}

// Initial render
renderEvents();
