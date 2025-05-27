// ✅ Step 1: Initialize event array
let communityEvents = [];

// ✅ Step 2: Add events using .push()
communityEvents.push(
  { name: "Workshop on Baking", category: "Culinary" },
  { name: "Live Music Night", category: "Music" },
  { name: "Art & Craft Fair", category: "Art" },
  { name: "Jazz Concert", category: "Music" },
  { name: "AI in Healthcare", category: "Tech" }
);

// ✅ Step 3: Filter only Music events
const musicEvents = communityEvents.filter(event => event.category === "Music");

// ✅ Step 4: Map to formatted display cards
const formattedEvents = communityEvents.map(event => {
  return `🎉 ${event.name} [${event.category}]`;
});

// ✅ Display All
const outputDiv = document.getElementById("eventList");

outputDiv.innerHTML = `
  <h2>🎵 Music Events</h2>
  <ul>
    ${musicEvents.map(e => `<li>${e.name}</li>`).join("")}
  </ul>

  <h2>📋 All Events (Formatted)</h2>
  <ul>
    ${formattedEvents.map(item => `<li>${item}</li>`).join("")}
  </ul>
`;
