// window.pageYOffset;
let naviagtionMenu = document.querySelector(".navigation");
let ham = document.querySelector(".hamburger");
let navLinks = document.querySelector(".navigation__links");
let hamClicked = false;

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 100) {
    naviagtionMenu.classList.add("menu");
    naviagtionMenu.classList.remove("menu-mid");
  } else {
    naviagtionMenu.classList.remove("menu");
  }

  if (80 < window.pageYOffset && window.pageYOffset < 99) {
    naviagtionMenu.classList.add("menu-mid");
  } else {
    naviagtionMenu.classList.remove("menu-mid");
  }
});

ham.addEventListener("click", () => {
  if (!hamClicked) {
    ham.classList.add("ham-rotate");
    navLinks.classList.add("show-menu");
    hamClicked = true;
  } else {
    ham.classList.remove("ham-rotate");
    navLinks.classList.remove("show-menu");
    hamClicked = false;
  }
});
