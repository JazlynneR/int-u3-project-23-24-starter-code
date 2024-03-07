// Declare variables below to save the different divs of your story.
//screens
let storyOpening = document.querySelector(".story-opening");
let optionOneScreen = document.querySelector(".option-one-screen");
let optionTwoScreen = document.querySelector(".option-two-screen");
let optionOneEnd = document.querySelector(".option-one-end");
let optionTwoEnd = document.querySelector(".option-two-end");
//buttons
let optionOne = document.querySelector(".option-one");
let optionTwo = document.querySelector(".option-two");
let optionOneContinue = document.querySelector(".option-one-continue");
let optionTwoContinue = document.querySelector(".option-two-continue");

// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


optionOne.addEventListener('click', function(){
  storyOpening.style.display = "none";
  optionOne.style.display = "none";
  optionTwo.style.display = "none";
  optionOneScreen.style.display = "block";
  optionOneContinue.style.display = "block";
 });

optionTwo.addEventListener('click', function(){
  storyOpening.style.display = "none";
  optionOne.style.display = "none";
  optionTwo.style.display = "none";
  optionTwoScreen.style.display = "block";
  optionTwoContinue.style.display = "block";
 });


optionOneContinue.addEventListener('click', function(){
  optionOneScreen.style.display = "none";
  optionOneContinue.style.display = "none";
  optionOneEnd.style.display = "block";
 });


optionTwoContinue.addEventListener('click', function(){
  optionTwoScreen.style.display = "none";
  optionTwoContinue.style.display = "none";
  optionTwoEnd.style.display = "block";
 });