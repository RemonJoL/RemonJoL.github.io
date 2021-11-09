// ----------------------------------------------
// Open Burger Menu
// ----------------------------------------------

// Declares variables for DOM elements used in function
const burgerBtn = document.querySelector(".burger-button");
const burgerMenu = document.querySelector(".burger-menu");
const burgerMenuContainer = document.querySelector(".burger-menu-container");
const burgerMenuOverlay = document.querySelector(".burger-menu-overlay");
const overlay = document.querySelector(".overlay");

// Adds click functionaliy to burger button to open burger menu
burgerBtn.addEventListener("click", function(){
  // Runs animation where burger menu opens up, expands and the contents are displayed only after the burger menu is fully expanded by hiding the overlay
  burgerMenuContainer.style.opacity = "0";
  burgerMenuOverlay.style.opacity = "1";
  burgerMenu.style.display = "block";
  overlay.style.display = "flex";
  setTimeout(function(){
    burgerMenu.style.width = "230px";
    overlay.style.opacity = "1";
    burgerMenu.style.height = "455px";
  }, 200);
  setTimeout(function(){
    burgerMenuContainer.style.opacity = "1";
    burgerMenuOverlay.style.opacity = "0";
  }, 400);
});

// ----------------------------------------------
// Close Burger Menu
// ----------------------------------------------

// Adds click functionaliy to overlay to close burger menu
overlay.addEventListener("click", function(){
  // Runs burger menu opening animation in reverse
  burgerMenuContainer.style.opacity = "0";
  setTimeout(function(){
  burgerMenuOverlay.style.opacity = "1";
  burgerMenu.style.width = "50px";
  burgerMenu.style.height = "50px";
  overlay.style.opacity = "0";
  }, 200);
  setTimeout(function(){
    burgerMenu.style.display = "none";
    overlay.style.display = "none";
  }, 400);
});
