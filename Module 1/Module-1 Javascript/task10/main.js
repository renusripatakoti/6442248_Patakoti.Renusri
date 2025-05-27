// ✅ Use const for fixed data and let for variables that change
const originalEvents = [
  { name: "Tech Talk", category: "Tech", seats: 10 },
  { name: "Music Jam", category: "Music", seats: 0 },
  { name: "Art Expo", category: "Art", seats: 5 }
];

const container = document.querySelector("#eventContainer");

// ✅ Default parameter used
function renderEvents(events = []) {
  container.innerHTML = "";

  // ✅ Use destructuring and .forEach()
  events.forEach(({ name, category, seats }) => {
    const card = document.createElement("div");
    card.className = "card";

    const title = document.createElement("h3");
    title.textContent = name;

    const info = document.createElement("p");
    info.textContent = `Category: ${category} | Seats: ${seats}`;

    card.appendChild(title);
    card.appendChild(info);
    container.appendChild(card);
  });
}

// ✅ Clone using spread operator, filter for only available events
const filteredEvents = [...originalEvents].filter(({ seats }) => seats > 0);

// Render filtered events
renderEvents(filteredEvents);
