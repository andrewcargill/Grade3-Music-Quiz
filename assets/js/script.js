
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
    ]
}

///DISPLAY QUESTION IN HTML

//Step1: Selects question 1 from state
let question = state.questions[0];

//Step 2: Selects the question text
let questionTitle = (question["title"]);

//Step 3: Displays question text in html question container
let questionTextHTML = document.getElementById("text");
questionTextHTML.innerHTML = "Q" +state.questionNumber + ": " + questionTitle;

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



///START OF GAME
//1. Select a random Question
    //1a. Select all 'questions.used' = false
let usedQuestions = state.questions.filter(question => !question.used);
/*
console.log(usedQuestions);
console.log(usedQuestions[0]);
console.log(usedQuestions[1]);*/

    //1b. randomly select a question from result
let random = Math.floor(Math.random() * usedQuestions.length);
let nextQuestion = (random, usedQuestions[random]);
console.log(nextQuestion);


//3. Display question in html
//4. Display question number in html


///WHEN TRUE OR FALSE CLICKED
//1. Check user answer against question answer
//2. If correct add 1 for score
//2. Set question 'used' to true
//3. Check: Does 'questions.used' = question.length'
            //if true = game is over 
                // Display score 
            //else goto start of game






