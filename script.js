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

let dropone = document.querySelector(".dropdown-content-1");
let droptwo = document.querySelector(".dropdown-content-2");
let navRotate = document.querySelector(".nav-arrow-1");
let navRotateTwo = document.querySelector(".nav-arrow-2");

document.querySelector(".dropdown-1").addEventListener("click", (event) => {
 event.preventDefault();
 dropone.classList.toggle("nav-unhide");
 navRotate.classList.toggle("nav-rotate");
});
document.querySelector(".dropdown-2").addEventListener("click", (event) => {
 event.preventDefault();
 droptwo.classList.toggle("nav-unhide");
 navRotateTwo.classList.toggle("nav-rotate");
});
