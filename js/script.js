var startButton = document.getElementById("button-start");
var quizArea = document.getElementById("questionArea"); //for inital content on the start page
var generatedQuestions = document.getElementById("questionContainer"); // for questions generated
const title = document.getElementById("questionTitle");
const ol = document.getElementById("questionOptions");
var answer = document.getElementById("answerContainer");
var result = document.getElementById("results");
var scoreBoard = document.getElementById("scoresContainer");
var scoreTitle = document.getElementById("scoreTitle");

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
    question: "Demo question",
    correctAnswer: 3,
    options: ["1. Option 00", "2. Option 01", "3. Option 02", "4. Option 03"],
  },
];

let arrayLength = questions.length;
let questionPosition = 0;
//let finalScore = 0;

function startQuiz(event) {
  event.preventDefault();
  quizArea.remove();
  //displayQuestion01();
  displayQuestion();

  //use setInterval and in the function minus 1 second from the original count (60 ) at every 1000 milisecond
}
//this is the counter for counting the question that should be displayed on the webpage

function displayQuestion() {
  //display title of question
  let h2Title = questions[questionPosition].question;
  title.innerText = h2Title;
  //title.append(questions[questionPosition].question);
  //console.log("Q: " + questions[questionPosition].question);
  //display the options (answers) of the question
  //get length of options
  let answerOptions = 4;
  for (i = 0; i < 4; i++) {
    var answerElementLI = document.createElement("li");
    //console.log(questions[questionPosition].options[i]);
    answerElementLI.innerText = questions[questionPosition].options[i]; //display the answer options only
    answerElementLI.setAttribute("id", i); //assign an id to the <LI> element,
    answerElementLI.className = "button";
    ol.appendChild(answerElementLI);
  }

  //var Button = document.getElementById("button-next");

  // start quiz: renderQuestion()
  // click on an answer: goToNextQuestion() which then automatically calls -> renderQuestion()
  // answerElementLI.addEventListener("click", goToNextQuestion);
  ol.addEventListener("click", (event) => {
    console.log("key pressed: " + event.target.id);
    // console.log("NodeName: ", event.target.nodeName);
    // let keyPressed = event.target.id;
    let chosenAnsValue = event.target.innerText;
    //console.log("Chosen Value: ", chosenAnsValue);
    displayResult(chosenAnsValue);
  });
}
function displayResult(chosenAnsValue) {
  if (questionPosition >= arrayLength) return; // when the last question is reached clear the setInterval
  let correctAns = questions[questionPosition].correctAnswer;
  if (chosenAnsValue == questions[questionPosition].options[correctAns]) {
    result.textContent = "Awsome: You got it correct!";
    result.className = "answerPanel";
    answer.append(result);
    const quizTimeOut = setTimeout(goToNextQuestion, 2000);
    //finalScore++;
  } else {
    result.textContent = "Sorry: Your answer is incorrect";
    result.className = "answerPanel";
    answer.append(result);
    const quizTimeOut = setTimeout(goToNextQuestion, 2000);
  }
}

function goToNextQuestion() {
  // //increase the quiz count

  // //questionPosition = questionPosition + 1;
  // console.log("question coun before: " + questionPosition);
  // //check if the question count has reached the end of the quiz
  // if (questionPosition === arrayLength) {
  //   return;
  // } else if (questionPosition < arrayLength) {
  //   //console.log(questionPosition);
  //   //console.log("question array length: " + arrayLength);
  //   questionPosition = questionPosition + 1;
  //   console.log("question count after: " + questionPosition);
  //   title.textContent = "";
  //   ol.textContent = "";
  //   result.textContent = "";
  //   displayQuestion();
  // } //else (questionPosition === arrayLength) return;
  if (questionPosition === arrayLength) {
    displayScore();
  } else {
    //console.log(questionPosition);
    //console.log("question array length: " + arrayLength);
    questionPosition = questionPosition + 1;
    console.log("question count after: " + questionPosition);
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
  //finalScore = finalScore - 1;
  //generate the content
  scoreTitle.textContent = "All Done";
  scoreBoard.append(scoreTitle);
  var scoreText = document.createElement("blockquote");
  scoreText.innerHTML = "Your final score is: " + finalScore;
  console.log("Final score: " + finalScore);
  scoreBoard.append(scoreText);
}

// Attaches event listener to button
startButton.addEventListener("click", startQuiz);
