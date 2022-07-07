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
  let color = generateColor()
  let colorStr = "#" + color;

  // Card
  let card = createElement("div", ["card", "flex", "justify-center", "items-center", "flex-col", "rounded-lg", "h-full"], null);
  card.style.width = generateWidthPercentage(numOfCards) + "%";
  card.style.margin = "8px";
  card.style.borderRadius = 10 + "px";

  // Card color
  let cardColor = createElement("div", ["cardColor", "h-1/2", "w-full"], null);
  cardColor.style.backgroundColor = colorStr;

  // Card detail
  let cardDetail = createElement("div", ["flex", "justify-center", "items-center", "h-1/2", "w-full"], null);
  cardDetail.style.backgroundColor = "#ECF2F7";

  let h1 = createElement("h1", ["cardDetail", "font-display", "text-4xl"], colorStr);
  let rgb = createElement("h5", ["cardDetail", "font-display"], null);

  card.appendChild(cardColor);
  card.appendChild(cardDetail);
  cardDetail.appendChild(h1);

  CARD_PARENT.appendChild(card);
}

function createElement(element, classes, content) {
  Array.isArray(classes);
  let newElement = document.createElement(element);

  for (var i = 0; i < classes.length; i++) {
    newElement.classList.add(classes[i]);
  }

  if (content != null && content != undefined) {
    newElement.innerHTML = content;
  }

  return newElement;
}

function generateNewColors() {
  let cards = document.getElementsByClassName("card");
  let color;
  for (var i = 0; i < cards.length; i++) {
    color = "#" + generateColor();
    document.getElementsByClassName("cardColor")[i].style.backgroundColor =
      color;
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
