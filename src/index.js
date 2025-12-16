import loadHome from "./components/Home";
import loadMenu from "./components/Menu";
import loadContact from "./components/Contact";
import "./styles.css";

function clearContent() {
    const content = document.getElementById("content").textContent = "";
}

function initTabs() {
  document.getElementById("Home").addEventListener("click", () => {
    clearContent();
    loadHome();
  });

  document.getElementById("Menu").addEventListener("click", () => {
    clearContent();
    loadMenu();
  });

  document.getElementById("Contact").addEventListener("click", () => {
    clearContent();
    loadContact();
  });
}

// Initial load
document.addEventListener("DOMContentLoaded", () => {
  loadHome(); // Show home first time
  initTabs();
});
