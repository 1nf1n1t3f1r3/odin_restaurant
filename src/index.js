// src/index.js
console.log("Restaurant app is running!");

// CSS
import "./styles.css";

// Images

// Functions
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";

// JS
// Function that handles swapping pages
function showPage(page) {
  content.textContent = "";
  content.appendChild(page());
}

// INITIAL PAGE LOAD
showPage(loadHome);

// BUTTON EVENT LISTENERS
document.getElementById("home-btn").addEventListener("click", () => {
  showPage(loadHome);
});

document.getElementById("menu-btn").addEventListener("click", () => {
  showPage(loadMenu);
});

document.getElementById("about-btn").addEventListener("click", () => {
  showPage(loadContact);
});
