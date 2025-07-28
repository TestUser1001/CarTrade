const menuBtn = document.getElementById("menuImg");
const mainNav = document.getElementById("mainNav");
const navContainer = document.getElementById("navContainer");
menuBtn.addEventListener("click", (e) => {
  /*   console.log(e); */

  if (!mainNav.classList.contains("visible")) {
    mainNav.classList.toggle("visible");
  } else {
    mainNav.classList.remove("visible");
  }

  /*   console.log(mainNav.classList); */
});

window.addEventListener("resize", (e) => {
  if (window.innerWidth > 768) {
    if (mainNav.classList.contains("visible")) {
      mainNav.classList.remove("visible");
    }
    if (!navContainer.classList.contains("container")) {
      navContainer.classList.toggle("container");
    }
  } else {
    if (navContainer.classList.contains("container")) {
      navContainer.classList.remove("container");
    }
  }
});
