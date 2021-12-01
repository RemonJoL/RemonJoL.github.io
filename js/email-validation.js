// ----------------------------------------------
// Email Validation
// ----------------------------------------------

let contactformField = document.querySelectorAll(".contactform-field");

for(let i=0;i<contactformField.length;i++){
  let  = contactformField[i].name;
  contactformField[i].addEventListener("input", function(fieldName) {
    //
    const emailFormat = /^([A-Za-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    const nameFormat = /^\s*([A-Za-z]{1,}([\.,] |[-']| )?)+[A-Za-z]+\.?\s*$/;
    const subjectFormat = /^\s*[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$|/;
    const messageFormat = /^\s*[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$|/;
    //       yourname   @   domain   .    com        ( .uk )
    // see regex101.com for reference of all characters
    /*
    ([a-z\d\.-]+) a-z represents alphabet characters, d resembles digits.
    a backslash is an escape character, used so the dot isnt parsed in the syntax,
    the hyphen does not need escaping.the plus sign denotes that any amount of
    characters above 1 is accepted.

    @ next we just have an 'at' symbol

    ([a-z\d-]+) everything here is explained in the first brackets. This is
    the domain such as 'google'

    \. the backslash is used as an escape character here too, to separate the
    domain and domain suffix

    ([a-z]{2,8}) this is the first part of the domain suffix, eg 'com'. the curly
    braces restrict the potential length of the suffix

    (\.[a-z]{2,8})? and finally the back slash once again escapes the dot, the
    question mark dilineates that this is an optional addendum to the suffix, eg
    the .uk of .co.uk
    */
    if (contactformField[i] === contactformField[0] || contactformField[i] === contactformField[1]){
    // If text in the (sur)name field has a valid format
      if(contactformField[i].value.match(nameFormat)) {
        // Displays the green dot and hides the red dot if it was previously visible.
        document.querySelectorAll(".green-dot")[i].style.display = "block";
        document.querySelectorAll(".red-dot")[i].style.display = "none";
      }
      // If the (sur)name field is empty
      else if(contactformField[i].value == "") {
        // Hides the both dots if they were previously visible.
        document.querySelectorAll(".green-dot")[i].style.display = "none";
        document.querySelectorAll(".red-dot")[i].style.display = "none";
      }
      // if the (sur)name field contains text that does not match a normal name
      else {
        // Displays the red dot and hides the green dot if it was previously visible.
        document.querySelectorAll(".green-dot")[i].style.display = "none";
        document.querySelectorAll(".red-dot")[i].style.display = "block";
      }
    }

    else if(contactformField[i] === contactformField[2]){
    // If text in the email field has a valid format
      if(contactformField[i].value.match(emailFormat)) {
        // Displays the green dot and hides the red dot if it was previously visible.
        document.querySelectorAll(".green-dot")[i].style.display = "block";
        document.querySelectorAll(".red-dot")[i].style.display = "none";
      }
      // If the email field is empty
      else if(contactformField[i].value == "") {
        // Hides the both dots if they were previously visible.
        document.querySelectorAll(".green-dot")[i].style.display = "none";
        document.querySelectorAll(".red-dot")[i].style.display = "none";
      }
      // if the email field contains text that does not match a valid email address
      else {
        // Displays the red dot and hides the green dot if it was previously visible.
        document.querySelectorAll(".green-dot")[i].style.display = "none";
        document.querySelectorAll(".red-dot")[i].style.display = "block";
      }
    }

    else if(contactformField[i] === contactformField[3]){
    // If text in the subject field has a valid format
      if(contactformField[i].value.match(subjectFormat)) {
        // Displays the green dot and hides the red dot if it was previously visible.
        document.querySelectorAll(".green-dot")[i].style.display = "block";
        document.querySelectorAll(".red-dot")[i].style.display = "none";
      }
      // If the subject field is empty
      else if(contactformField[i].value == "") {
        // Hides the both dots if they were previously visible.
        document.querySelectorAll(".green-dot")[i].style.display = "none";
        document.querySelectorAll(".red-dot")[i].style.display = "none";
      }
      // if the subject field contains text that does not match a valid subject
      else {
        // Displays the red dot and hides the green dot if it was previously visible.
        document.querySelectorAll(".green-dot")[i].style.display = "none";
        document.querySelectorAll(".red-dot")[i].style.display = "block";
      }
    }
    else if(contactformField[i] === contactformField[4]){
    // If text in the message field has a valid format
      if(contactformField[i].value.match(messageFormat)) {
        // Displays the green dot and hides the red dot if it was previously visible.
        document.querySelectorAll(".green-dot")[i].style.display = "block";
        document.querySelectorAll(".red-dot")[i].style.display = "none";
      }
      // If the message field is empty
      else if(contactformField[i].value == "") {
        // Hides the both dots if they were previously visible.
        document.querySelectorAll(".green-dot")[i].style.display = "none";
        document.querySelectorAll(".red-dot")[i].style.display = "none";
      }
      // if the email message contains text that does not match a valid message
      else {
        // Displays the red dot and hides the green dot if it was previously visible.
        document.querySelectorAll(".green-dot")[i].style.display = "none";
        document.querySelectorAll(".red-dot")[i].style.display = "block";
      }
    }
  });
}

// Declares variables for DOM elements used in function
const submitBtn = document.querySelector(".submit-button");
const greenDots = document.querySelectorAll(".green-dot");
const confirmation = document.querySelector(".contact-confirmation-container");
// Declares green dot counter
let greenDotCounter;

// Adds click functionality to submit button
submitBtn.addEventListener("click", function(){
  event.preventDefault();
  // Resets green dot counter to 0
  greenDotCounter = 0;
  // Loops through green dots and checks how many are displayed
  for(let i=0;i<greenDots.length;i++){
    if(greenDots[i].style.display === "block"){
      greenDotCounter++;
    }
  }
  // If all green dots are visible:
  if(greenDotCounter === 5){
    // Displays popup message confirming contact form content has been sent, then hides popup
    confirmation.innerText = "Message Sent!";
    confirmation.style.display = "block";
    setTimeout(function(){
      confirmation.style.display = "none";
    }, 2000);
  }
  else {
    // Displays popup message saying valid information has to be entered, then hides popup
    confirmation.innerText = "Please make sure all fields are filled in correctly";
    confirmation.style.display = "block";
    setTimeout(function(){
      confirmation.style.display = "none";
    }, 2000);
  }
});
