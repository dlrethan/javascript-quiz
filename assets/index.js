// document selectors to manip
let answerOne = document.getElementById("a");
let answerTwo = document.getElementById("b");
let answerThree = document.getElementById("c");
let answerFour = document.getElementById("d");
let question = document.getElementById("question");
let scoreBoard = document.getElementById("score");
// questions
const quizQuestions = [
  {
    question: "How many times can an ID be used?",
    choiceA: "unlimted",
    choiceB: "1",
    choiceC: "420",
    choiceD: "69",
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
// generate quiz function
function generateQuiz() {
  let currentQuestion = quizQuestions[currentQuestionIndex];
  question.textContent = currentQuestion.question;
  answerOne.textContent = currentQuestion.choiceA;
  answerTwo.textContent = currentQuestion.choiceB;
  answerThree.textContent = currentQuestion.choiceC;
  answerFour.textContent = currentQuestion.choiceD;
}
generateQuiz();
// checks answer
function checkAnswer(answer) {
  correct = quizQuestions[currentQuestionIndex].correctAnswer;
  if (answer === correct) {
    alert("WooHOO! You got it Right!");
    currentQuestionIndex++;
    generateQuiz();
    score++;
    scoreBoard.textContent = score;
  } else if (answer !== correct) {
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
  }
}
