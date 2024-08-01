import { eventHandler } from "./modules/event-handler.mjs";

const init = () => {
   eventHandler.setupEventListeners();
};

document.getElementById("back-button").addEventListener("click", function () {
  window.history.back();
});

document.getElementById("quit-btn").addEventListener("click", function () {
  window.history.back();
});


window.onload = init;



