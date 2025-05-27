const container = document.querySelector("#eventContainer");
const loader = document.querySelector("#loading");

fetch("events.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to load events");
    }
    return response.json();
  })
  .then(events => {
    loader.style.display = "none";
    events.forEach(event => {
      const card = document.createElement("div");
      card.className = "card";

      const title = document.createElement("h3");
      title.textContent = event.name;

      const info = document.createElement("p");
      info.textContent = `Category: ${event.category} | Seats: ${event.seats}`;

      card.appendChild(title);
      card.appendChild(info);
      container.appendChild(card);
    });
  })
  .catch(error => {
    loader.textContent = "Error loading events.";
    console.error(error);
  });
