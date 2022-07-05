import generateColor from "./generator.js";

let numOfCards = 5;
const CARD_PARENT = document.getElementById("card-parent");

// Generate 5 cards, 3 min, 8 max
window.addEventListener("load", (ev) => {
  let color;

  // Create the cards
  for (let i = 0; i < numOfCards; i++) {
    // Generate the color
    color = generateColor();
    console.log(color);
    // Assign width
    // Give hex values to other portion
  }
});

/// Generates equal widths depending on number of cards
function generateWidthPercentage(num) {
  return (1 / num) * numOfCards;
}

function addCard() {
  if (numOfCards == 8) {
    window.alert("Maximum amount of color cards reached");
    return;
  }
  
  console.log(generateColor() + "\n" + numOfCards);
  numOfCards++;
}

function removeCard() {
  if (numOfCards == 3) {
    window.alert("Minimum amount of color cards reached");
    return;
  }

  console.log(numOfCards);
  numOfCards--;
}

export {addCard, removeCard}