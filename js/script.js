const splashScreenStartButton = document.getElementById("button-start");
var splashScreen = document.getElementById("splashScreenContainer"); //for inital content on the start page
var generatedQuestions = document.getElementById("questionContainer"); // for questions generated
const title = document.getElementById("questionTitle");
const ol = document.getElementById("questionOptions");
var answer = document.getElementById("answerContainer");
var result = document.getElementById("results");
var scoreBoard = document.getElementById("scoresContainer");
var scoreTitle = document.getElementById("scoreTitle");
var displayScoreContainer = document.getElementById("displayScoresContainer");
var displayScoreOL = document.getElementById("scoreBoard");
var displayScoreTitle = document.getElementById("highScoresDisplay");

const questions = [
  {
    question: "Inside which HTML element do you write JavaScript?",
    correctAnswer: 2,
    options: [
      "1. <scripting> </scripting>",
      "2. <javascripting> </javascripting>",
      "3. <script> </script>",
      "4. <js> </js>",
    ],
  },
  {
    question: "How do you create a function in Javascript?",
    correctAnswer: 1,
    options: [
      "1. function = myFunction()",
      "2. function myFunction()",
      "3. function: myFunction()",
      "4. myFunction()",
    ],
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    correctAnswer: 2,
    options: [
      "1. msgBox('Hello World')",
      "2. alertBox('Hello World')",
      "3. alert('Hello World')",
      "4. msg('Hello World')",
    ],
  },
  {
    question: "An 'if' statement in JavaScript is...",
    correctAnswer: 0,
    options: [
      "1. if (i==5){...}",
      "2. if (i==5) then",
      "3. if i=5 then",
      "4. if i=5",
    ],
  },
];

let arrayLength = questions.length;
let questionPosition = 0;
let finalScore = 0;
let h2Title = questions[questionPosition].question;
//let answerOptions = 4;

//var userInitials = " ";

function startQuiz(event) {
  event.preventDefault();

  splashScreen.remove();
  //displayQuestion01();
  displayQuestion();

  //use setInterval and in the function minus 1 second from the original count (60 ) at every 1000 milisecond
}
//this is the counter for counting the question that should be displayed on the webpage

function displayQuestion() {
  console.log("Q: " + h2Title + "  " + questions[questionPosition].question);
  //display title of question

  title.innerText = h2Title;
  //title.append(questions[questionPosition].question);
  //console.log("Q: " + questions[questionPosition].question);
  //display the options (answers) of the question
  //get length of options

  for (i = 0; i < 4; i++) {
    var answerElementLI = document.createElement("li");
    //console.log(questions[questionPosition].options[i]);
    answerElementLI.innerText = questions[questionPosition].options[i]; //display the answer options only
    answerElementLI.setAttribute("id", i); //assign an id to the <LI> element,
    answerElementLI.className = "button";
    ol.appendChild(answerElementLI);

    answerElementLI.addEventListener("click", (event) => {
      console.log("key pressed: " + event.target.id);
      // console.log("NodeName: ", event.target.nodeName);
      // let keyPressed = event.target.id;
      let chosenAnsValue = event.target.innerText;
      //console.log("Chosen Value: ", chosenAnsValue);
      displayResult(chosenAnsValue);
    });
  }
}
function displayResult(chosenAnsValue) {
  if (questionPosition >= arrayLength) return; // when the last question is reached clear the setInterval
  let correctAns = questions[questionPosition].correctAnswer;
  if (chosenAnsValue == questions[questionPosition].options[correctAns]) {
    result.textContent = "Awsome: You got it correct!";
    result.className = "answerPanel";
    answer.append(result);
    setTimeout(goToNextQuestion, 1500);
    finalScore++;
  } else {
    result.textContent = "Sorry: Your answer is incorrect";
    result.className = "answerPanel";
    answer.append(result);
    setTimeout(goToNextQuestion, 1500);
  }
}

function goToNextQuestion() {
  //increase the quiz counter
  questionPosition = questionPosition + 1;
  if (questionPosition === arrayLength) {
    displayScore();
  } else {
    title.textContent = "";
    ol.textContent = "";
    result.textContent = "";
    displayQuestion();
  }
}
function displayScore() {
  //clear the page
  generatedQuestions.remove();
  answerContainer.remove();

  //generate the content
  scoreTitle.textContent = "All Done";
  scoreBoard.append(scoreTitle);

  var scoreText = document.createElement("blockquote");
  scoreText.innerHTML = "Your final score is: " + finalScore;
  // console.log("Final score: " + finalScore);
  scoreBoard.append(scoreText);

  var inputScores = document.createElement("input");
  var label = document.createElement("label");
  //inputScores.innerHTML = "Enter initials:";
  label.textContent = "Enter your initials: ";
  scoreBoard.append(label);
  //inputScores.name = "highScoreName";
  inputScores.setAttribute("id", "highScoreName");
  inputScores.setAttribute("type", "text");
  scoreBoard.append(inputScores);

  var submitScoreButton = document.createElement("button");
  submitScoreButton.textContent = "Submit Score";
  submitScoreButton.className = "submitScoreButton";
  scoreBoard.append(submitScoreButton);
  //handling the click event of the submit score button
  submitScoreButton.addEventListener("click", handleScoreValues);
}

function handleScoreValues() {
  //clear element by element
  var userInitials = document.querySelector("#highScoreName").value;
  //console.log("user initials: " + userInitials);
  userInitials = localStorage.setItem("userInitials", userInitials);
  localStorage.setItem("yourScore", finalScore);
  displayHighscoreList();
}
function displayHighscoreList() {
  //clear the HTML elements

  var scoreElementLI = document.createElement("li");
  var clearScoresButton = document.createElement("button");
  var userInitials = localStorage.getItem("userInitials");
  var userScore = localStorage.getItem("yourScore");
  var restartQuizButton = document.createElement("button");
  // console.log("user initials: " + userInitials);
  // console.log("user score: " + userScore);
  //print the values
  scoreBoard.remove();

  displayScoreTitle.textContent = "High Score List";
  scoreElementLI.className = "highscoreList";
  //scoreElementLI.setAttribute("id", "highscoreList");
  scoreElementLI.innerHTML = userInitials + " " + "--" + " " + userScore;
  displayScoreOL.appendChild(scoreElementLI);

  restartQuizButton.textContent = "Restart Quiz";
  restartQuizButton.className = "submitScoreButton";
  displayScoreContainer.append(restartQuizButton);
  restartQuizButton.addEventListener("click", restartQuiz);

  clearScoresButton.textContent = "Reset Saved Scores";
  clearScoresButton.className = "submitScoreButton";
  displayScoreContainer.append(clearScoresButton);
  clearScoresButton.addEventListener("click", clearScores);

  function clearScores() {
    displayScoreOL.textContent = "";
    return;
  }
}
function restartQuiz() {
  //arrayLength = questions.length;

  //console.log("QuizRestarted:");
  generatedQuestions.remove();
  generatedQuestions.remove();
  displayScoreContainer.remove();
  scoreBoard.remove();
  var resplashScreenContain = document.getElementById(
    "re-splashScreenContainer"
  );
  var splashScreenTitle = document.getElementById("re-splashTitle");
  var textPara = document.getElementById("re-text-paragraph");
  var restartButton = document.createElement("button");

  splashScreenTitle.textContent = "Coding Quiz Challenge";
  resplashScreenContain.append(splashScreenTitle);

  textPara.textContent =
    "Try to answer the following code-related questions within the time limit.Incorrect answers will penalise your time by ten 10 seconds";
  resplashScreenContain.append(textPara);

  restartButton.textContent = "Start";
  restartButton.className = "submitScoreButton";
  resplashScreenContain.append(restartButton);
  restartButton.addEventListener("click", display);

  function display() {
    console.log("QUIZ HAS RESTARTED++++");
    questionPosition = 0;
    finalScore = 0;

    displayQuestion();
  }
}

// Attaches event listener to button
splashScreenStartButton.addEventListener("click", startQuiz);
