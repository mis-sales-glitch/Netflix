const categories = {
  "Trending Now": ["Red Horizon", "Echo Valley", "Dark Signal", "The Last Byte", "Skybound"],
  "Popular on Netflix": ["Neon Night", "Coastal Drift", "Midnight Heist", "Silent Line", "Parallel"],
  "Only on Netflix": ["Code 909", "Frostline", "Paper Crown", "Quantum Trace", "Atlas Gate"]
};

const rows = document.getElementById("rows");

Object.entries(categories).forEach(([title, shows]) => {
  const row = document.createElement("section");
  row.className = "row";

  const heading = document.createElement("h3");
  heading.textContent = title;
  row.appendChild(heading);

  const cards = document.createElement("div");
  cards.className = "cards";

  shows.forEach((show, index) => {
    const card = document.createElement("article");
    card.className = "card";
    card.style.background = `linear-gradient(120deg, hsl(${index * 45 + 350} 80% 40%), hsl(${index * 45 + 25} 70% 30%))`;

    const label = document.createElement("span");
    label.textContent = show;
    card.appendChild(label);

    cards.appendChild(card);
  });

  row.appendChild(cards);
  rows.appendChild(row);
});
