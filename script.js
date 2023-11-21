let navMenu = document.querySelector(".nav-menu");
let navPanel = document.querySelector(".nav-panel");
let navClose = document.querySelector(".nav-close");

navMenu.addEventListener("click", () => {
 navPanel.classList.toggle("nav-open");
});
navClose.addEventListener("click", () => {
 navPanel.classList.remove("nav-open");
});
