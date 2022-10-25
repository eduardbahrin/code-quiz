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
    question: "Question 1 : Commonly used data types DO NOT include:",
    choices: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
    answer: "c",
  },
  {
    question:
      "Question 2 : The condition in an if / else statement is enclosed within ____.",
    choices: [
      "a. quotes",
      "b. curly brackets",
      "c. parentheses",
      "d. square brackets",
    ],
    answer: "c",
  },
  {
    question: "Question 3 : Arrays in JavaScript can be used to store ____.",
    choices: [
      "a. numbers and strings",
      "b. other arrays",
      "c. booleans",
      "d. all of the above",
    ],
    answer: "d",
  },
  {
    question:
      "Question 4 : String values must be enclosed within ____ when being assigned to variables.",
    choices: ["a. commas", "b. curly brackets", "c. quotes", "d. parentheses"],
    answer: "c",
  },
  {
    question:
      "Question 5 : A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: [
      "a. JavaScript",
      "b. terminal / bash",
      "c. for loops",
      "d. console.log",
    ],
    answer: "d",
  },
  {
    question: "Question 6 : The first index of an array is ____.",
    choices: ["a. 0", "b. 1", "c. 8", "d. any"],
    answer: "a",
  },
  {
    question: "Question 7 : What does DOM stand for?",
    choices: [
      "a. Document Object Model",
      "b. Do Overnight Modules",
      "c. Divas Obviously Model",
      "d. Description, Operation & Maintenance",
    ],
    answer: "a",
  },
  {
    question:
      "Questions 8 : Which event occurs when the user clicks on an HTML element?",
    choices: ["a. onclick", "b. onchange", "c. onmouseover", "d. onmouseclick"],
    answer: "a",
  },
];

//
