var splashScreenStartButton = document.getElementById("button-start");
var splashScreen = document.getElementById("splashScreenContainer"); //for inital content on the start page
var generatedQuestions = document.getElementById("questionContainer"); // for questions generated
var title = document.getElementById("questionTitle");
var ol = document.getElementById("questionOptions");
var answer = document.getElementById("answerContainer");
var result = document.getElementById("results");
var scoreBoard = document.querySelector("#scoresContainer");
var scoreTitle = document.getElementById("scoreTitle");
var scoreText = document.getElementById("finalScorePlaceholder");
var displayScoreContainer = document.getElementById("highScoresContainer");
var displayScoreOL = document.getElementById("scoreBoard");
var displayScoreTitle = document.getElementById("highScoresDisplay");
var inputScores = document.createElement("input");
var label = document.createElement("label");
var submitScoreButton = document.createElement("button");
var scoreElementLI = document.createElement("li");
var clearScoresButton = document.createElement("button");
var restartQuizButton = document.createElement("button");
var timeLeftContainer = document.getElementById("timerContainer");
var timeRemaining = document.getElementById("timeLeftPlaceholder");

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
let timeLeft = 60;

function startQuiz(event) {
  event.preventDefault();
  splashScreen.style.display = "none";
  //timeStart.textContent = "";
  countdown();
  displayQuestion();

  //use setInterval and in the function minus 1 second from the original count (60 ) at every 1000 milisecond
}

function displayQuestion() {
  generatedQuestions.style.display = "flex";
  answer.style.display = "flex";
  answerContainer.innerHTML = "";
  ol.innerHTML = "";
  //display title of question
  let h2Title = questions[questionPosition].question;
  title.innerText = h2Title;

  for (i = 0; i < 4; i++) {
    var answerElementLI = document.createElement("li");
    //console.log(questions[questionPosition].options[i]);
    answerElementLI.innerText = questions[questionPosition].options[i]; //display the answer options only
    answerElementLI.setAttribute("id", i); //assign an id to the <LI> element,
    answerElementLI.className = "button";
    ol.appendChild(answerElementLI);

    answerElementLI.addEventListener("click", (event) => {
      //console.log("key pressed: " + event.target.id);
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
    setTimeout(goToNextQuestion, 3000);
    finalScore++;
  } else {
    result.textContent = "Sorry: Your answer is incorrect";
    result.className = "answerPanel";
    timeLeft = timeLeft - 10;
    answer.append(result);
    setTimeout(goToNextQuestion, 3000);
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
  generatedQuestions.style.display = "none";
  answerContainer.style.display = "none";
  timeLeftContainer.style.display = "none";
  scoreBoard.style.display = "block";
  // scoreTitle.textContent = "";
  // scoreText.textContent = "";
  // label.textContent = "";
  // inputScores.value = "";
  // submitScoreButton.value = "";

  //generate the content
  scoreTitle.textContent = "All Done";
  scoreBoard.append(scoreTitle);

  var scoreText = document.getElementById("finalScorePlaceholder");
  scoreText.innerHTML = "Your final score is: " + finalScore;
  scoreBoard.append(scoreText);

  var inputScores = document.createElement("input");
  var label = document.createElement("label");
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
  document.getElementById("highScoresContainer").style.display = "block";
  document.getElementById("scoresContainer").style.display = "none";
  displayScoreTitle.innerHTML = "";
  scoreElementLI.innerHTML = "";
  clearScoresButton.value = "";
  restartQuizButton.value = "";

  var userInitials = localStorage.getItem("userInitials");
  var userScore = localStorage.getItem("yourScore");
  // var scoreElementLI = document.createElement("li");
  // var clearScoresButton = document.createElement("button");
  // var userInitials = localStorage.getItem("userInitials");
  // var userScore = localStorage.getItem("yourScore");
  // var restartQuizButton = document.createElement("button");

  displayScoreTitle.textContent = "High Score List";
  scoreElementLI.className = "highscoreList";
  //scoreElementLI.setAttribute("id", "highscoreList");
  scoreElementLI.innerHTML = userInitials + " " + "--" + " " + userScore;
  displayScoreOL.appendChild(scoreElementLI);

  restartQuizButton.textContent = "Restart Quiz";
  restartQuizButton.className = "submitScoreButton";
  displayScoreContainer.append(restartQuizButton);
  restartQuizButton.addEventListener("click", function () {
    //hide all elements
    splashScreen.style.display = "flex";
    generatedQuestions.style.display = "none";
    answer.style.display = "none";
    scoreBoard.style.display = "none;";
    displayScoreContainer.style.display = "none";
    timeLeftContainer.style.display = "flex";
    //reset question count and scores
    questionPosition = 0;
    finalScore = 0;
    timeLeft = 60;
  });

  clearScoresButton.textContent = "Reset Saved Scores";
  clearScoresButton.className = "submitScoreButton";
  displayScoreContainer.append(clearScoresButton);
  clearScoresButton.addEventListener("click", function () {
    displayScoreOL.textContent = "";
  });
}
function countdown() {
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timeRemaining.textContent = timeLeft + " seconds remaining";

      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timeRemaining.textContent = timeLeft + " second remaining";
      timeLeft--;
      return;
    }
  }, 2000);
}
// Attaches event listener to button
splashScreenStartButton.addEventListener("click", startQuiz);
