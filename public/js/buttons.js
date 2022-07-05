import { addCard, removeCard } from "./card-loader.js";

const ADD_BUTTON = document.getElementById("add");
const REMOVE_BUTTON = document.getElementById("remove");

window.addEventListener("load", (ev) => {
  ADD_BUTTON.addEventListener("click", (ev) => {
    addCard();
  });

  REMOVE_BUTTON.addEventListener("click", (ev) => {
    removeCard();
  });
});
