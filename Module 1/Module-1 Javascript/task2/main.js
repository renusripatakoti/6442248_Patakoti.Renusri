// Use const for event name and date
const eventName = "Community Music Festival";
const eventDate = "2025-06-15";

// Use let for seats because it can change
let availableSeats = 5;

// Use template literals to concatenate event info
const eventDetails = `Event: ${eventName} | Date: ${eventDate}`;
document.getElementById("eventInfo").textContent = eventDetails;

// Show initial seats
document.getElementById("seatsLeft").textContent = `Available Seats: ${availableSeats}`;

// Function to register and decrease seat count
function register() {
  if (availableSeats > 0) {
    availableSeats--; // Use -- operator
    document.getElementById("seatsLeft").textContent = `Available Seats: ${availableSeats}`;
    alert("Registration successful!");
  } else {
    alert("Sorry, no more seats available.");
  }
}
