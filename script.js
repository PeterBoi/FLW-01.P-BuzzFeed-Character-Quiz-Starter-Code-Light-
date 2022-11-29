document.addEventListener('DOMContentLoaded', buzzfeedQuiz, false);

function buzzfeedQuiz() {

  // task 4: declare variables for the html elements you'll use as selectors later. You need the submit button, display div, and all three inputs for your questions.

  let button = document.querySelector(".submit");
  let displayResult = document.querySelector(".displayResult");
  let q1 = document.querySelector(".q1");
  let q2 = document.querySelector(".q2");
  let q3 = document.querySelector(".q3");
  let q4 = document.querySelector(".q4");

  // task 5: declare variables for values we'll set later. You'll need one for an image source, a result and a score for each question.
  let image 
  let result1;
  let result2;
  let result3;
  let result4;

  button.onclick = function() {

    // task 6: Declare user input variables for each of your questions. If you have three questions, you should have three variables. These variables should equal the value of the user input for each question.
    let userInput1 = q1.value;
    let userInput2 = q2.value;
    let userInput3 = q3.value;
    let userInput4 = q4.value;




    // task 7: create a conditional statement for the responses to Question 1 based on the user input.
    if (userInput1 === "Flight") {
      result1 = 2;
    }
    else if (userInput1 === "Electricity") {
      result1 = 6;
    }
    else if (userInput1 === "Super Regeneration") {
      result1 = 8;
    }
    else if (userInput1 === "Iron Suit") {
      result1 = 10;
    }
    console.log(result1);
    if (userInput2 === "Guardians Of The Galaxy") {
      result2 = 2;
    }
    else if(userInput2 === "Fantastic Four"){
      result2 = 6;
    }
    else if(userInput2 === "X-Men") {
      result2 = 8 ;
    }
    else if(userInput2 === "Avengers") {
      result2 = 10 ;
    }
    console.log(result2);
    if(userInput3 === "Venom") {
      result3 = 2 ;
    }else if(userInput3 === "Doctor Doom") {
      result3 = 6 ;
    }else if(userInput3 === "Wolverine") {
      result3 = 8 ;
    }else if(userInput3 === "Iron Man") {
      result3 = 10 ;
    }
    console.log(result3);
    if(userInput4 === "Fire") {
      result4 = 2 ;
    }else if(userInput4 === "Silver Bullet") {
      result4 = 6 ;
    }else if(userInput4 === "Electricity") {
      result4 = 8 ;
    }else if(userInput4 === "Magic") {
      result4 = 10 ;
    }
    console.log(result4);
    // task 10: declare a variable for the total score of the quiz and set it equal to the sum of each question score.
    totalScore = result1 + result2 + result3 + result4;
    console.log(totalScore);
    // task 11: create a conditional statement for the result to the quiz based on the total score. Using string interpolation, display these to the page: the result, an image that corresponds and a message to go with it.
    if(totalScore <= 40 && totalScore >= 33){
      
    }
    else if(totalScore <= 32 && totalScore >= 25){
      
    }
    else if(totalScore <= 24 && totalScore >= 17)
    //NOTE TO SELF use similar method like used in task 7
  };
}