import { addCard, removeCard, generateNewColors } from "./card-loader.js";

const ADD_BUTTON = document.getElementById("add");
const REMOVE_BUTTON = document.getElementById("remove");
const GENERATE_BUTTON = document.getElementById("generate");

window.addEventListener("load", (ev) => {
  ADD_BUTTON.addEventListener("click", (ev) => {
    addCard();
  });

  REMOVE_BUTTON.addEventListener("click", (ev) => {
    removeCard();
  });

  GENERATE_BUTTON.addEventListener("click", ev => {
    generateNewColors();
  });

});
