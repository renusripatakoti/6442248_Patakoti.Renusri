// Event data: name, date, availableSeats
const events = [
  { name: "Tree Plantation Drive", date: "2025-06-30", availableSeats: 5 },
  { name: "Old Book Donation", date: "2024-05-01", availableSeats: 10 }, // Past event
  { name: "Local Food Fest", date: "2025-07-05", availableSeats: 0 },     // Full event
  { name: "Art & Craft Workshop", date: "2025-06-25", availableSeats: 3 }
];

// Get today's date
const today = new Date().toISOString().split("T")[0];

// Display valid upcoming events
const container = document.getElementById("eventsContainer");

events.forEach((event, index) => {
  // Check if event is upcoming and has seats
  if (event.date > today && event.availableSeats > 0) {
    // Create event card
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${event.name}</h3>
      <p>Date: ${event.date}</p>
      <p>Available Seats: <span id="seats-${index}">${event.availableSeats}</span></p>
      <button onclick="register(${index})">Register</button>
    `;
    container.appendChild(div);
  } else {
    // Ignore past or full events
    console.log(`Skipping: ${event.name}`);
  }
});

// Register function wrapped in try-catch
function register(index) {
  try {
    if (events[index].availableSeats > 0) {
      events[index].availableSeats--;
      document.getElementById(`seats-${index}`).textContent = events[index].availableSeats;
      alert("Registered successfully!");
    } else {
      throw new Error("No seats available for this event.");
    }
  } catch (error) {
    console.error(error.message);
    alert("Error: " + error.message);
  }
}
