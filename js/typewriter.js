// // values to keep track of the number of letters typed, which quote to use. etc. Don't change these values.
// var i = 0,
//     a = 0,
//     isBackspacing = false,
//     isParagraph = false;
//
// // Typerwrite text content. Use a pipe to indicate the start of the second line "|".
// var textArray = [
//   "I'm a Web Developer",
//   "I'm a Software Developer",
//   "I'm a Game Developer",
//   "I'm a Designer"
// ];
//
// // Speed (in milliseconds) of typing.
// var speedForward = 100, //Typing Speed
//     speedWait = 1000, // Wait between typing and backspacing
//     speedBetweenLines = 1000, //Wait between first and second lines
//     speedBackspace = 25; //Backspace Speed
//
// //Run the loop
// typeWriter("header-title", textArray);
//
// function typeWriter(id, ar) {
//   var element = $("#" + id),
//       aString = ar[a],
//       eHeader = element.children("h2"), //Header element
//       eParagraph = element.children("span"); //Subheader element
//
//   // Determine if animation should be typing or backspacing
//   if (!isBackspacing) {
//
//     // If full string hasn't yet been typed out, continue typing
//     if (i < aString.length) {
//
//       // If character about to be typed is a pipe, switch to second line and continue.
//       if (aString.charAt(i) == "|") {
//         isParagraph = true;
//         eHeader.removeClass("cursor");
//         eParagraph.addClass("cursor");
//         i++;
//         setTimeout(function(){ typeWriter(id, ar); }, speedBetweenLines);
//
//       // If character isn't a pipe, continue typing.
//       } else {
//         // Type header or subheader depending on whether pipe has been detected
//         if (!isParagraph) {
//           eHeader.text(eHeader.text() + aString.charAt(i));
//         } else {
//           eParagraph.text(eParagraph.text() + aString.charAt(i));
//         }
//         i++;
//         setTimeout(function(){ typeWriter(id, ar); }, speedForward);
//       }
//
//     // If full string has been typed, switch to backspace mode.
//     } else if (i == aString.length) {
//
//       isBackspacing = true;
//       setTimeout(function(){ typeWriter(id, ar); }, speedWait);
//
//     }
//
//   // If backspacing is enabled
//   } else {
//
//     // If either the header or the paragraph still has text, continue backspacing
//     if (eHeader.text().length > 0 || eParagraph.text().length > 0) {
//
//       // If paragraph still has text, continue erasing, otherwise switch to the header.
//       if (eParagraph.text().length > 0) {
//         eParagraph.text(eParagraph.text().substring(0, eParagraph.text().length - 1));
//       } else if (eHeader.text().length > 0) {
//         eParagraph.removeClass("cursor");
//         eHeader.addClass("cursor");
//         eHeader.text(eHeader.text().substring(0, eHeader.text().length - 1));
//       }
//       setTimeout(function(){ typeWriter(id, ar); }, speedBackspace);
//
//     // If neither head or paragraph still has text, switch to next quote in array and start typing.
//     } else {
//
//       isBackspacing = false;
//       i = 0;
//       isParagraph = false;
//       a = (a + 1) % ar.length; //Moves to next position in array, always looping back to 0
//       setTimeout(function(){ typeWriter(id, ar); }, 50);
//
//     }
//   }
// }


// var i = 0;
// var txt = "I'm a Web Developer"; /* The text */
// var speed = 50; /* The speed/duration of the effect in milliseconds */
//
// function typeWriter() {
//   if (i < txt.length) {
//     document.querySelector(".header-title h2").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }

// let i = 0;
//   let target = document.querySelector(".header-title h2");
//   let text = target.innerHTML;
//   target.innerHTML = ' ';
//   let speed = 75; //speed duration of effect in millisec
//
//   typeWriter(); //to call function
//   function typeWriter() {
//       if (i < text.length) {
//           target.innerHTML += text.charAt(i);
//           i++;
//           setTimeout(typeWriter, speed);
//       }
//   }

// function write() {
// let txt = document.querySelector(".header-title h2");
//   for (let i = 0; i < txt.length; i++) {
//     document.querySelector(".header-title h2").innerHTML += txt.charAt(i);
//     setTimeout(typeWriter, speed);
// }
// }


        // eHeader.text(eHeader.text().substring(0, eHeader.text().length - 1));

//           eHeader.text(eHeader.text() + aString.charAt(i));

// let text = "I'm a Web Developer";
// let i = 0;
// let isBackspacing = false;
//
// function typeWriter(){
//     if (!isBackspacing){
//       if (i < text.length) {
//         document.querySelector(".header-title h2").innerHTML += text.charAt(i);
//         i++;
//         setTimeout(typeWriter, 100);
//       }
//       else {
//         isBackspacing = true;
//         console.log("backspacing");
//         setTimeout(typeWriter, 100);
//       }
//
//     }
//     else if (isBackspacing = true) {
//       document.querySelector(".header-title h2").innerHTML -= text.charAt(i);
//       setTimeout(typeWriter, 100);
//       i--;
//       console.log(i);
//       console.log("backspacing true");
//
//     }
//
//     }

// const text = "I'm a Web Developer";
// let i = 0;
// erasing = false;
//
// function typeWriter(){
//
//
//
//   if (i < text.length) {
//     document.querySelector(".header-title h2").textContent += text.charAt(i);
//     console.log(text.charAt(i));
//     i++;
//     setTimeout(typeWriter, 100);
//   }
//   else {
//         document.querySelector(".header-title h2").textContent = text.slice(0, i);
//         console.log(text.charAt(i));
//         i--;
//   }
// }

// Declares the text to write
const text = [
  " I'm a Web Developer",
  " I'm a Software Developer",
  " I'm a Game Developer",
  " I'm a Designer"
];

// Declares counters for the typing effect, what sentence gets typed and set erasing to false, causing the script to type by default
let i = 0;
let textIndex = 0;
erasing = false;

function typeWriter(){

// Default state, erasing = false implicitly means typing = true
  if (erasing === false){
    // Checks if value of the counter i is lower the sentence's length, and if it is it will:
    if (i < text[textIndex].length) {
      // Adds letters to the element, where:
        // The i in charAt(i) stands for the number of the letter in the sentence
        // The i is increased by 1 so the script will type out the next letter
        // The script then waits 100ms before running again
      document.querySelector(".typewriterItem").textContent += text[textIndex].charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
    // If the counter is not lower than the sentence, it will:
    else {
      // Set the erasing state to true, which will trigger the script to start deleting
      // Before proceeding, the script waits for 1 second
      erasing = true;
      setTimeout(typeWriter, 1000);
    }

  }
// Erasing state
  else if (erasing = true){
    // Checks if value of the counter i is is not 0, and if it is not it will:
    if (i !== 0) {
      // Removes letters from the element, where:
        // The i in slice(0, i) stands for the number of the last letter in the sentence
        // The i is decreased by 1 so the script will remove the next letter
        // The script then waits 100ms before running again
      document.querySelector(".typewriterItem").textContent = text[textIndex].slice(0, i);
      i--;
      setTimeout(typeWriter, 75);
    }
    // If the counter is 0, depending on the textIndex counter that tells what sentence to type out, it will:
    else {
      // Ïf the text array counter is 3 (the last sentence in the array) it will:
      if (textIndex === 3) {
          // Sets erasing to false, which will cause the script to start typing again
          // Waits 0.1 second
          // Sets the textIndex counter to 0, which will make the script type out the first sentence again
        erasing = false;
        setTimeout(typeWriter, 100);
        textIndex = 0;
      }
      // Ïf the text array counter is not 3 (the last sentence in the array) it will:
      else {
          // Sets erasing to false, which will cause the script to start typing again
          // Waits 0.1 second
          // Adds 1 to the textIndex counter, which will make the script type out the next sentence
        erasing = false;
        setTimeout(typeWriter, 100);
        textIndex++;
      }
    }
  }

}

// Runs the script when it's loaded in 
typeWriter();



// const text = " I'm a Web Developer";
// let i = 0;
// let erasing = false;
//
// function typeWriter(){
//
// if (erasing === false){
//   if (i < text.length) {
//     document.querySelector(".header-title h2").textContent += text.charAt(i);
//     i++;
//     setTimeout(typeWriter, 100);
//     console.log(i);
//   }
//   else {
//     erasing = true;
//     setTimeout(typeWriter, 1000);
//   }
//
// }
// else if (erasing = true){
//   if (i !== 0) {
//         document.querySelector(".header-title h2").textContent = text.slice(0, i);
//         i--;
//         setTimeout(typeWriter, 50);
//         console.log(i);
//   }
//   else {
//     erasing = false;
//     setTimeout(typeWriter, 100);
//   }
//
//   }
//
// }

// const text = "I'm a Web Developer";
// let i = 25;
//
// document.querySelector(".header-title h2").textContent = text;
//
// function typeWriter(){
//
//     document.querySelector(".header-title h2").textContent = text.slice(0, i);
//     console.log(text.charAt(i));
//     i--;
//     // setTimeout(typeWriter, 100);
// }


// typeWriter();

// let i = 0;
// const txt = 'Lorem ipsum dummy text blabla.';
// const speed = 50;
// let delay = 25;
// let backspace = false;
//
// let outputElem = document.querySelector(".header-title h2"); // get element when page loads
// function typeWriter() {
//   outputElem.textContent = txt.substring(0, i);
//
//   if (i > txt.length + delay) backspace = true;
//   if (i == 0) backspace = false;
//   i = i + (backspace ? -1 : 1);
//   setTimeout(typeWriter, speed);
// }
