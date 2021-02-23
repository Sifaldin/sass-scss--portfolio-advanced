const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn-burger");

const nav = document.querySelector("nav");
const navMenu = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav-item");

let showMenu = false;

const toggleMenu = () => {
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    navMenu.classList.add("open");
    navItems.forEach(i=>{i.classList.add("open")});
    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    navMenu.classList.remove("open");
    navItems.forEach(i=>{i.classList.remove("open")});
    showMenu = false;
  }
}

menuBtn.addEventListener("click", toggleMenu);