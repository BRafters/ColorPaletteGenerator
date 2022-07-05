import generateColor from "./generator.js";

let numOfCards = 5;
const CARD_PARENT = document.getElementById("card-parent");

// Generate 5 cards, 3 min, 8 max
window.addEventListener("load", (ev) => {
  let color;

  // Create the cards
  for (let i = 0; i < numOfCards; i++) {
    // Generate the color
    color = "#" + generateColor();
    addCard(color);
  }
});

/// Generates equal widths depending on number of cards
function generateWidthPercentage(num) {
  return (1 / num) * numOfCards;
}

/// Adds a card to view
function addCard(color) {
  let card = document.createElement("div");
  card.classList.add(
    "flex",
    "justify-center",
    "items-center",
    "flex-col",
    "rounded-md",
    "h-full",
    "m-2"
  );
  card.style.width = generateWidthPercentage(numOfCards) + "%";

  let cardColor = document.createElement("div");
  cardColor.classList.add("h-1/2", "w-full");
  cardColor.style.backgroundColor = color;

  let cardDetail = document.createElement("div");
  cardDetail.classList.add(
    "flex",
    "justify-center",
    "items-center",
    "h-1/2",
    "w-full",
    "bg-off-white"
  );

  let h1 = document.createElement("h1");
  h1.classList.add("font-display", "text-4xl");

  card.appendChild(cardColor);
  card.appendChild(cardDetail);
  cardDetail.appendChild(h1);

  CARD_PARENT.appendChild(card);
}

/// Removes a card from view
function removeCard() {
  if (numOfCards == 3) {
    window.alert("Minimum amount of color cards reached");
    return;
  }

  console.log(numOfCards);
  numOfCards--;
}

export { addCard, removeCard };