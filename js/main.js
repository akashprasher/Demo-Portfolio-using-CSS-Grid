// window.pageYOffset;
let naviagtionMenu = document.querySelector(".navigation");

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 100) {
    naviagtionMenu.classList.add("menu");
    naviagtionMenu.classList.remove("menu-mid");
    console.log("showing" + window.pageYOffset);
  } else {
    naviagtionMenu.classList.remove("menu");
    // naviagtionMenu.classList.remove("menu-mid");
    console.log("showing else" + window.pageYOffset);
  }

  if (80 < window.pageYOffset && window.pageYOffset < 99) {
    naviagtionMenu.classList.add("menu-mid");
  } else {
    naviagtionMenu.classList.remove("menu-mid");
  }
});
