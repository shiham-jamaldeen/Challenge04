var startButton = document.getElementById("button-start");
var quizArea = document.getElementById("questionArea"); //for inital content on the start page
var generatedQuestions = document.getElementById("dynamicQuestions"); // for questions generated

function startQuiz(event) {
  event.preventDefault();
  quizArea.textContent = "";
  //displayQuestion01();
  displayQuestions();
}

function handleButtonClick() {
  //console.log(handleButtonClick.name);

  var displayAnswer = document.getElementById("answerArea");
  displayAnswer.textContent = "Sorry: Wrong answer";
  //displayAnswer.className = "answerPanel";
  displayAnswer.append(displayAnswer);
}
//answer 0 as an element
const questions = [
  {
    question: "Q1. Inside which HTML element do you write JavaScript?",
    correctAnswer: 2,
    options: [
      "1. <scripting> </scripting>",
      "2. <javascripting> </javascripting>",
      "3. <script> </script>",
      "4. <js> </js>",
    ],
  },
  {
    question: "Q2. How do you create a function in Javascript?",
    correctAnswer: 2,
    options: [
      "1. function = myFunction()",
      "2.function myFunction()",
      "3. function: myFunction()",
      "4. myFunction()",
    ],
  },
];

function displayQuestion() {

  
  //define questions array
  // let question1 = [
  //   { Q: "Q1. Inside which HTML element do you write JavaScript?" },
  //   { A1: "1. <scripting> </scripting>" },
  //   { A1: "2. <javascripting> </javascripting>" },
  //   { A1: "3. <script> </script>", correct: true },
  //   { A1: "4. <js> </js>" },
  // ];
  // let question2 = [
  //   { Q: "Q2. How do you create a function in Javascript?" },
  //   { A1: "1. function = myFunction()" },
  //   { A1: "2. function myFunction()" },
  //   { A1: "3. function: myFunction()", correct: true },
  //   { A1: "4. myFunction()" },
  // ];

  // var questionElement = document.getElementById("questionDisplayed");
  // var answerElementOL = document.getElementById("answerDisplayed");
  // //var answerElementLI = document.createElement("li");
  // questionElement.textContent = question1[0].Q;
  // generatedQuestions.append(questionElement);

  // for (i = 1; i < question1.length; i++) {
  //   //console.log("Element " + i + " of array: " + question1[i].A1);
  //   var answerElementLI = document.createElement("li");
  //   var answerX = document.getElementById("answerDisplayed");
  //   answerElementLI.textContent = question1[i].A1; //display the value only
  //   answerElementLI.setAttribute("id", i); //assign an id to the <LI> element,
  //   answerElementLI.className = "button";

  //   answerX.appendChild(answerElementLI);
  //   //check for key clicks and which element is clicked
  //   answerElementLI.addEventListener("click", (e) => {
  //console.log("keypressed: " + e.target.id); //display the key pressed
  //check what is pressed
  //if the key pressed == True flag then
  //display ANSWER CORRECT
  //SCORE++
  //Else display ANSWER INCORRECT
  //display ANSWER WRONG
  //TIMELEFT--
  //display next question

  //suggestion from Matt W:
  //--------------------------
  // loop over questions object
  // for each question, set the question title
  // for each option in this question, set the button text etc
  // add an event listener that looks at question.correctAnswer value and compares it to the index of the one that was one clicked to determine if it was correct.
  
  //});
}
//}

//index = index + 1;

/*        function displayQuestion01() {
          //Display Question 01
          var question1 = document.createElement("h2");
          question1.textContent =
            "Q1.Inside which HTML element do you write JavaScript code?";
          quizArea.append(question1);
          //create OL element

          var unorderedList = document.createElement("ol");
          unorderedList.setAttribute("id", "ol-answerlist-1");
          quizArea.append(unorderedList);

          var answerButton1 = document.createElement("li");
          answerButton1.textContent = "1. <scripting></scripting>";
          answerButton1.className = "button";
          answerButton1.setAttribute("id", "element-1");
          quizArea.appendChild(answerButton1);

          var answerButton2 = document.createElement("li");
          answerButton2.textContent = "2. <JavaScripting></JavaScripting>";
          answerButton2.className = "button";
          answerButton2.setAttribute("id", "element-2");
          quizArea.append(answerButton2);

          var answerButton3 = document.createElement("li");
          answerButton3.textContent = "3. <script></script>";
          answerButton3.className = "button";
          answerButton3.setAttribute("id", "element-3");
          quizArea.append(answerButton3);

          var answerButton4 = document.createElement("li");
          answerButton4.textContent = "4. <JS></JS>";
          answerButton4.setAttribute("id", "element-4");
          answerButton4.className = "button";
          quizArea.append(answerButton4);

          //listen for keypress

          var y = document.getElementById("ol-answerlist-1");
          y.addEventListener("click", function () {
            var z = JSON.stringify(y);
            console.log(z);
            if (z === "element-3") {
              var displayAnswer = document.createElement("div");
              displayAnswer.textContent = "Awsome: You got it correct!";
              displayAnswer.className = "answerPanel";
              quizArea.append(displayAnswer);
            } else {
              var displayAnswer = document.createElement("div");
              displayAnswer.textContent = "Sorry: Wrong answer";
              displayAnswer.className = "answerPanel";
              quizArea.append(displayAnswer);
            }
          });

          //console.log ("element:" + JSON.stringify(answer) + "contents of li: " + JSON.stringify(liAnswer2));

          //add the li and some elements

          //stylise the li

          // console.log ("this is the first element:", quizArea);
  //  console.log ("this is the second element:",question);
}*/

// Attaches event listener to button
startButton.addEventListener("click", startQuiz);
