
//Start of game

const state = {
    questionNumber: 1, 
    score: 0,
    questions: [
        {
            title: 'True',
            answer: true,
            playerAnswer: null,
            playerCorrect: null,
            used: false,
        },
        {
            title: 'Answer is true',
            answer: true,
            playerAnswer: null,
            playerCorrect: null,
            used: false,
        },
        {
            title: 'False',
            answer: false,
            playerAnswer: null,
            playerCorrect: null,
            used: false,
        },
        {
            title: 'Answer is true',
            answer: true,
            playerAnswer: null,
            playerCorrect: null,
            used: true,
        },
        {
            title: 'False',
            answer: false,
            playerAnswer: null,
            playerCorrect: null,
            used: true,
        },
        {
            title: 'Answer is true',
            answer: true,
            playerAnswer: null,
            playerCorrect: null,
            used: true,
        },
    ]
}
let count = 0;

let go = runQuestion();

function runQuestion() {



///START OF GAME
//SELECT AND DISPLAY NEXT QUESTION
//1. Check to see what questions have been used already in the game
let usedQuestions = state.questions.filter(question => !question.used);
    /* Checking variables
    console.log(usedQuestions);
    console.log(usedQuestions[0]);
    console.log(usedQuestions[1]);*/
    
//2. From the unused questions - randomly select one
let random = Math.floor(Math.random() * usedQuestions.length);
let nextQuestion = (random, usedQuestions[random]);
console.log(nextQuestion);
console.log(nextQuestion["title"]);
    
//3. Selects where question will be shown in HTML
let questionTitle = (nextQuestion["title"]);

//4. Displays question in html question container
let questionTextHTML = document.getElementById("text");
questionTextHTML.innerHTML = "Q" +state.questionNumber + ": " + questionTitle;

count++;


///Player Answers

//Finds out answer to question
let questionAnswer = nextQuestion["answer"];
console.log(questionAnswer);


//If player clicks 'true' / compares answer and updates player correct
let buttonTrue = document.getElementById("true");
buttonTrue.addEventListener("click", function() {

nextQuestion.playerAnswer = true;

if (nextQuestion.playerAnswer === questionAnswer){
        nextQuestion.playerCorrect = true;
        nextQuestion.user = true;
    } else {
        nextQuestion.playerCorrect = false;
        nextQuestion.user = true;
    }
    console.log(nextQuestion.playerCorrect);
    console.log(nextQuestion.user);
});

//If player clicks 'false' / compares answer and updates player correct
let buttonFalse = document.getElementById("false");
buttonFalse.addEventListener("click", function() {

nextQuestion.playerAnswer = false;

if (nextQuestion.playerAnswer === questionAnswer){
        nextQuestion.playerCorrect = true;
        nextQuestion.user = true;

       
    } else {
        nextQuestion.playerCorrect = false;
        nextQuestion.user = true;
    }
    console.log(nextQuestion.playerCorrect);
    console.log(nextQuestion.user);


});




};

///QUESTION COUNTER

//Step 1. find all questions
let allQuestions = state.questions;

//Step 2. count number of questions
let totalNumberOfQuestions = allQuestions.length;

// Step 3. Display question number and total number of questions in HTML
let questionNumberHTML = document.getElementById("question-num");
questionNumberHTML.innerHTML = "Question: " + count + "/ " + totalNumberOfQuestions;







///WHEN TRUE OR FALSE CLICKED
//1. Check user answer against question answer
//2. If correct add 1 for score
//2. Set question 'used' to true
//3. Check: Does 'questions.used' = question.length'
            //if true = game is over 
                // Display score 
            //else goto start of game






