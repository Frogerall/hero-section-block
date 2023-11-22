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
let navAnchor = document.querySelectorAll(".nav-anchor");

document.querySelector(".dropdown-1").addEventListener("click", (event) => {
 event.preventDefault();
 let screenWidth = window.innerWidth;

 if (screenWidth < 768) {
  dropone.classList.toggle("nav-x");
  navRotate.classList.toggle("nav-rotate");
 } else {
  dropone.classList.remove("nav-x");
  dropone.classList.toggle("nav-unhide");
  navRotate.classList.toggle("nav-rotate");
 }
});
document.querySelector(".dropdown-2").addEventListener("click", (event) => {
 event.preventDefault();
 let screenWidth = window.innerWidth;
 if (screenWidth >= 768) {
  droptwo.classList.toggle("nav-unhide");
  navRotateTwo.classList.toggle("nav-rotate");
  droptwo.classList.remove("nav-x");
 } else if (screenWidth < 768) {
  droptwo.classList.toggle("nav-x");
  navRotateTwo.classList.toggle("nav-rotate");
 } else {
  droptwo.classList.remove("nav-x");
  alert("why are you here?");
 }
});

navAnchor.forEach((button, index) => {
 button.addEventListener("click", (event) => {
  event.preventDefault();
  navAnchor.forEach((otherButton) => {
   if (otherButton !== button) {
    otherButton.classList.remove("nav-active");
   }
  });
  button.classList.toggle("nav-active");
 });
});
