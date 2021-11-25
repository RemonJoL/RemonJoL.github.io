// ----------------------------------------------
// Coding Example Toggle
// ----------------------------------------------

// Declares the necessary variables
const codingExampleTitle = document.querySelectorAll(".coding-example-title");
const codingExampleContent = document.querySelectorAll(".coding-example-content");
const codingExampleArrow = document.querySelectorAll(".coding-example-expand-container");
const codingExampleArrowImg = document.querySelectorAll(".coding-example-arrow");

// Loops through all titles and buttons to add function to every one of them
for(let i=0;i<codingExampleArrow.length;i++){
  // Adds following functionality to the arrow button:
  // 1. changes the orientation of the button when clicked
  // 2. toggles visibility of the code example
  codingExampleArrow[i].addEventListener("click", function(){
      codingExampleArrowImg[i].classList.toggle("arrow-up");
      codingExampleContent[i].classList.toggle("coding-example-visible");
  });
  // Adds following functionality to the code example title:
  // 1. changes the orientation of the button when clicked
  // 2. toggles visibility of the code example
  codingExampleTitle[i].addEventListener("click", function(){
      codingExampleArrowImg[i].classList.toggle("arrow-up");
      codingExampleContent[i].classList.toggle("coding-example-visible");
  });
}
