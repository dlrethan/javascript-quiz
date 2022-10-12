// document selectors to manip
let answerOne = document.getElementById("a");
let answerTwo = document.getElementById("b");
let answerThree = document.getElementById("c");
let answerFour = document.getElementById("d");
let question = document.getElementById("question");
let scoreBoard = document.getElementById("score");
let questionArea = document.getElementById("questionArea");
let startButton = document.getElementById("startBtn");
let endGame = document.getElementById("endGame");
let currentScore = document.getElementById("currentScore");
let input = document.getElementById("highScoreVal");
let highScoreOutput = document.getElementById("highScore");
let submitButton = document.getElementById("submitButton");
// questions
const quizQuestions = [
  {
    question: "How many times should an ID be used?",
    choiceA: "2",
    choiceB: "1",
    choiceC: "5",
    choiceD: "3",
    correctAnswer: "b",
  },
  {
    question: "What language is Javascript loosely based off?",
    choiceA: "Java",
    choiceB: "Python",
    choiceC: "C++",
    choiceD: "C#",
    correctAnswer: "a",
  },
  {
    question: "What language is for functionality of a webpage?",
    choiceA: "JavaScript",
    choiceB: "CSS",
    choiceC: "HTML",
    choiceD: "C++",
    correctAnswer: "a",
  },
  {
    question: "How many data types reside in java?",
    choiceA: "3",
    choiceB: "2",
    choiceC: "1",
    choiceD: "5",
    correctAnswer: "d",
  },
  {
    question: "What company developed JavaScript",
    choiceA: "Java",
    choiceB: "Python",
    choiceC: "Netscape",
    choiceD: "Microsoft",
    correctAnswer: "c",
  },
  {
    question:
      "What beverage is best for rehydration after a long day of coding?",
    choiceA: "water",
    choiceB: "gatorade",
    choiceC: "diet dr. Pepper",
    choiceD: "water x 2",
    correctAnswer: "c",
  },
];
// variables in order for game to work
let currentQuestionIndex = 0;
let correct;
let score = 0;
let lastQuestionIndex = quizQuestions.length;
// hide other HTML to start quiz function
startButton.addEventListener("click", startQuiz);
function startQuiz() {
  startButton.classList.add("hidden");
  questionArea.classList.remove("hidden");
  generateQuiz();
}

// generate quiz function
function generateQuiz() {
  if (currentQuestionIndex === lastQuestionIndex) {
    return endQuiz();
  }
  let currentQuestion = quizQuestions[currentQuestionIndex];
  question.textContent = currentQuestion.question;
  answerOne.textContent = currentQuestion.choiceA;
  answerTwo.textContent = currentQuestion.choiceB;
  answerThree.textContent = currentQuestion.choiceC;
  answerFour.textContent = currentQuestion.choiceD;
}

function endQuiz() {
  questionArea.classList.add("hidden");
  endGame.classList.remove("hidden");
  currentScore.textContent =
    "Congrats you got " + score + " out of " + lastQuestionIndex + " right!";
}

// checks answer
function checkAnswer(answer) {
  correct = quizQuestions[currentQuestionIndex].correctAnswer;
  if (answer === correct && currentQuestionIndex !== lastQuestionIndex) {
    alert("WooHOO! You got it Right!");
    currentQuestionIndex++;
    generateQuiz();
    score++;
    scoreBoard.textContent = score;
  } else if (answer !== correct && currentQuestionIndex !== lastQuestionIndex) {
    alert("You'll get them next time!");
    currentQuestionIndex++;
    generateQuiz();
    // prevents score from going below 0
    if (score <= 0) {
      score = 0;
    } else {
      score--;
      scoreBoard.textContent = score;
    }
  } else {
    endQuiz();
  }
}
// advent listener for highscore page
submitButton.onclick = function (event) {
  event.preventDefault();
  let savedHighscores =
    JSON.parse(localStorage.getItem("savedHighscores")) || [];
  let currentUser = input.value.trim();
  let currentHighscore = {
    name: currentUser,
    score: score,
  };
  savedHighscores.push(currentHighscore);
  localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
  generateHighScores();
  endGame.classList.add("hidden");
  highScoreOutput.classList.remove("hidden");
};
// loop to add highscore to highscore page
function generateHighScores() {
  var highScores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
  for (let i = 0; i < highScores.length; i++) {
    let newName = document.createElement("li");

    newName.textContent =
      "Name: " + highScores[i].name + " Score: " + highScores[i].score;

    highScoreOutput.appendChild(newName);
  }
}
