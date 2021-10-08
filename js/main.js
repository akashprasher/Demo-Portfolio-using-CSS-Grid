// window.pageYOffset;
let naviagtionMenu = document.querySelector(".navigation");

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
