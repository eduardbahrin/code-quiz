// Dom elements

var welcome = document.querySelector("#intro");
var startBtn = document.querySelector("#start-button");
var introPage = document.querySelector("#quiz-intro");

var questionPage = document.querySelector("#quiz-questions");
var askQuestion = document.querySelector("#ask-question");

var reactButtons = document.querySelectorAll(".choices");
var answerBtn1 = document.querySelector("#answer-btn1");
var answerBtn2 = document.querySelector("#answer-btn2");
var answerBtn3 = document.querySelector("#answer-btn3");
var answerBtn4 = document.querySelector("#answer-btn4");

var checkLine = document.querySelector("#check");
var scoreBoard = document.querySelector("#quiz-submit");
var finalScore = document.querySelector("#end-score");
var userInitial = document.querySelector("#initials");

var submitBtn = document.querySelector("#submit-btn");
var highScorePage = document.querySelector("#quiz-highscores");
var scoreRecord = document.querySelector("#score-record");
var scoreCheck = document.querySelector("#score-check");
var finish = document.querySelector("#end");

var backBtn = document.querySelector("#back-btn");
var clearBtn = document.querySelector("#clear-btn");

//questions arrays
var questionsSource = [
  {
    question: "Question 1: Commonly used data types DO NOT include:",
    choices: [" strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    question:
      "Question 2: The condition in an if / else statement is enclosed within ____.",
    choices: [" quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    question: "Question 3: Arrays in JavaScript can be used to store ____.",
    choices: [
      " numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    question:
      "Question 4: String values must be enclosed within ____ when being assigned to variables.",
    choices: [" commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes",
  },
  {
    question:
      "Question 5 : A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: [" JavaScript", "terminal / bash", "for loops", "console.log()"],
    answer: "console.log()",
  },
  {
    question: "Question 6: The first index of an array is ____.",
    choices: [" 0", "1", "8", "any"],
    answer: "0",
  },
  {
    question: "Question 7: What does DOM stand for?",
    choices: [
      " Document Object Model",
      "Do Overnight Modules",
      "Divas Obviously Model",
      "Description, Operation & Maintenance",
    ],
    answer: "Document Object Model",
  },
  {
    question:
      "Questions 8: Which event occurs when the user clicks on a HTML element?",
    choices: [" onclick", "onchange", "onmouseover", "onmouseclick"],
    answer: "onclick",
  },
];

var startQuiz = function () {
  introPage.classList.add("hide-container");
  questionPage.classList.remove("hide-container");
};

startBtn.addEventListener("click", startQuiz);
