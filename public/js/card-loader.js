import generateColor from "./generator.js";

let numOfCards = 5;
const CARD_PARENT = document.getElementById("card-parent");

// Generate 5 cards, 3 min, 8 max
window.addEventListener("load", (ev) => {
  // Create the cards
  for (let i = 0; i < numOfCards; i++) {
    addCard();
  }
});

/// Generates equal widths depending on number of cards
function generateWidthPercentage(num) {
  return (1 / num) * numOfCards * 100;
}

/// Adds a card to view
function addCard() {
  let color = "#" + generateColor();

  let card = document.createElement("div");
  card.classList.add(
    "card",
    "flex",
    "justify-center",
    "items-center",
    "flex-col",
    "rounded-lg",
    "h-full"
  );
  card.style.width = generateWidthPercentage(numOfCards) + "%";
  card.style.margin = "8px";
  card.style.borderRadius = 10 + "px";

  let cardColor = document.createElement("div");
  cardColor.classList.add("cardColor", "h-1/2", "w-full");
  cardColor.style.backgroundColor = color;

  let cardDetail = document.createElement("div");
  cardDetail.style.backgroundColor = "#ECF2F7";
  cardDetail.classList.add(
    "flex",
    "justify-center",
    "items-center",
    "h-1/2",
    "w-full"
  );

  let h1 = document.createElement("h1");
  h1.innerHTML = color;
  h1.classList.add("cardDetail", "font-display", "text-4xl");

  card.appendChild(cardColor);
  card.appendChild(cardDetail);
  cardDetail.appendChild(h1);

  CARD_PARENT.appendChild(card);
}

function generateNewColors(){
  let cards = document.getElementsByClassName("card");
  let color;
  for(var i = 0; i < cards.length; i++){
    color = "#" + generateColor();
    document.getElementsByClassName("cardColor")[i].style.backgroundColor = color;
    document.getElementsByClassName("cardDetail")[i].innerHTML = color;
  }
}

/// Removes a card from view
function removeCard() {
  if (numOfCards == 3) {
    window.alert("Minimum amount of color cards reached");
    return;
  }

  let cards = document.getElementsByClassName("card");
  let lastCard = cards[cards.length - 1];
  CARD_PARENT.removeChild(lastCard);

  numOfCards--;
}

export { addCard, removeCard, generateNewColors };
