let navMenu = document.querySelector(".nav-menu");
let navPanel = document.querySelector(".nav-panel");
let navClose = document.querySelector(".nav-close");
let navOverlay = document.querySelector(".nav-overlay");

navMenu.addEventListener("click", () => {
 navPanel.classList.toggle("nav-open");
 navOverlay.classList.toggle("nav-unhide");
});

navClose.addEventListener("click", () => {
 navPanel.classList.remove("nav-open");
 navOverlay.classList.remove("nav-unhide");
});
