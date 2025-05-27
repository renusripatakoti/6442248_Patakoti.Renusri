// ✅ 1. Event Constructor Function
function Event(name, date, category, seats) {
  this.name = name;
  this.date = date;
  this.category = category;
  this.seats = seats;
}

// ✅ 2. Add checkAvailability() to the prototype
Event.prototype.checkAvailability = function () {
  return this.seats > 0 ? "Seats available" : "Sold out";
};

// ✅ 3. Create event objects
const event1 = new Event("Dance Workshop", "2025-08-10", "Culture", 0);
const event2 = new Event("AI Conference", "2025-09-15", "Tech", 20);

// ✅ Show Object.entries()
const entries1 = Object.entries(event1);
const entries2 = Object.entries(event2);

// ✅ Display all info
const output = document.getElementById("output");

function displayEvent(eventObj, entries) {
  const eventHTML = `
    <h3>${eventObj.name}</h3>
    <ul>
      ${entries.map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`).join("")}
    </ul>
    <p><strong>Availability:</strong> ${eventObj.checkAvailability()}</p>
    <hr>
  `;
  output.innerHTML += eventHTML;
}

displayEvent(event1, entries1);
displayEvent(event2, entries2);
