
//Start of game

const state = {
    questionNumber: 1, 
    score: 0,
    questions: [
        {
            title: 'A guitar has 5 strings!',
            answer: false,
            playerAnswer: null,
            used: false,
        },
        {
            title: 'A banjo is a string instrument!',
            answer: true,
            playerAnswer: null,
            used: true,
        },
        {
            title: 'Question 3!',
            answer: true,
            playerAnswer: null,
            used: false,
        },
        {
            title: 'Question 4!',
            answer: true,
            playerAnswer: null,
            used: false,
        },
        {
            title: 'Question 5!',
            answer: true,
            playerAnswer: null,
            used: false,
        },
        {
            title: 'Question 6!',
            answer: true,
            playerAnswer: null,
            used: false,
        },
        {
            title: 'Question 7!',
            answer: true,
            playerAnswer: null,
            used: false,
        },
    ]
}

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



};



///CURRENT QUESTION NUMBER AND TOTAL NUMBERS TO HTML

// Displaying total number of questions
//Step 1. find all questions
let allQuestions = state.questions;

//Step 2. count all questions
let totalNumberOfQuestions = allQuestions.length;

// Step 3. Displays question number and total number of questions in HTML
let questionNumberHTML = document.getElementById("question-num");
questionNumberHTML.innerHTML = "Question: " + state.questionNumber + "/ " + totalNumberOfQuestions;

///True & False Buttons

// Button Event listeners
let buttonTrue = document.getElementById("true");
buttonTrue.addEventListener("click", function() {
    fncheck(true);
    console.log("true");
});

let buttonFalse = document.getElementById("false");
buttonFalse.addEventListener("click", function() {
    fncheck(false);
    console.log("false");
});





///WHEN TRUE OR FALSE CLICKED
//1. Check user answer against question answer
//2. If correct add 1 for score
//2. Set question 'used' to true
//3. Check: Does 'questions.used' = question.length'
            //if true = game is over 
                // Display score 
            //else goto start of game






