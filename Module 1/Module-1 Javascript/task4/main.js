// In-memory event store
let events = [];

// ✅ 1. Function to add a new event
function addEvent(name, date, category, seats) {
  events.push({ name, date, category, seats, registered: 0 });
}

// ✅ 2. Closure to track total registrations per category
function createCategoryTracker() {
  const registrations = {};

  return function registerUser(eventIndex) {
    const event = events[eventIndex];

    if (event.seats > 0) {
      event.seats--;
      event.registered++;

      // Track by category
      if (!registrations[event.category]) {
        registrations[event.category] = 1;
      } else {
        registrations[event.category]++;
      }

      console.log(`Registered for ${event.name}. Total in ${event.category}: ${registrations[event.category]}`);
      return true;
    } else {
      console.warn(`No seats left for ${event.name}`);
      return false;
    }
  };
}

// Create registerUser with closure
const registerUser = createCategoryTracker();

// ✅ 3. Function to filter events by category
function filterEventsByCategory(category) {
  return events.filter(event => event.category === category);
}

// ✅ 4. Higher-order function for dynamic filtering
function filterEvents(callback) {
  return events.filter(callback);
}

// --- Sample Setup and Testing ---

// Add some events
addEvent("Tech Talk", "2025-07-10", "Education", 3);
addEvent("Yoga Camp", "2025-07-12", "Health", 2);
addEvent("Hackathon", "2025-07-15", "Education", 5);
addEvent("Food Fest", "2025-07-18", "Culture", 0);

// Register some users
registerUser(0); // Tech Talk
registerUser(2); // Hackathon
registerUser(2); // Hackathon

// Display all Education events
const educationEvents = filterEventsByCategory("Education");
console.log("Education Events:", educationEvents);

// Dynamic search: events with seats left
const openEvents = filterEvents(event => event.seats > 0);
console.log("Events with seats:", openEvents);

// Display to page
document.getElementById("eventList").innerHTML =
  events.map(e => `<p>${e.name} (${e.category}) - Seats Left: ${e.seats}</p>`).join('');
