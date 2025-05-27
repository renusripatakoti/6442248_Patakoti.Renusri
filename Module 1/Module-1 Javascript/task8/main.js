const events = [
  { name: "Jazz Night", category: "Music", seats: 2 },
  { name: "AI Workshop", category: "Tech", seats: 3 },
  { name: "Painting Class", category: "Art", seats: 1 },
  { name: "Rock Concert", category: "Music", seats: 0 },
];

const container = document.querySelector("#eventContainer");
const categoryFilter = document.querySelector("#categoryFilter");
const searchBox = document.querySelector("#searchBox");

let filteredCategory = "All";
let searchTerm = "";

// Render event cards
function renderEvents() {
  container.innerHTML = "";

  const filtered = events.filter(e => {
    const matchCategory = filteredCategory === "All" || e.category === filteredCategory;
    const matchSearch = e.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = "<p>No events found.</p>";
    return;
  }

  filtered.forEach((event, index) => {
    const card = document.createElement("div");
    card.className = "card";

    const title = document.createElement("h3");
    title.textContent = event.name;

    const info = document.createElement("p");
    info.textContent = `Category: ${event.category} | Seats: ${event.seats}`;

    const btn = document.createElement("button");
    btn.textContent = "Register";
    btn.disabled = event.seats === 0;
    btn.onclick = () => {
      if (event.seats > 0) {
        events[index].seats--;
        renderEvents(); // refresh
      }
    };

    card.appendChild(title);
    card.appendChild(info);
    card.appendChild(btn);
    container.appendChild(card);
  });
}

// 🔄 Filter by category
categoryFilter.onchange = () => {
  filteredCategory = categoryFilter.value;
  renderEvents();
};

// 🔍 Search by name
searchBox.onkeydown = () => {
  searchTerm = searchBox.value;
  renderEvents();
};

// Initial render
renderEvents();
