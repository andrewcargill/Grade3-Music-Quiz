
//Start of game

const state = {
    questionNumber: 1, 
    score: 0,
    questions: [
        {
            title: 'A guitar has 5 strings!',
            answer: false,
            playerAnswer: null,
        },
        {
            title: 'A banjo is a string instrument!',
            answer: true,
            playerAnswer: null,
        },
    ]
}

//DISPLAY QUESTION IN HTML

//Step1: Selects question 1 from state
let question = state.questions[0];

//Step 2: Selects the question text
let questionTitle = (question["title"]);

//Step 3: Displays question text in html question container
let questionTextHTML = document.getElementById("text");
questionTextHTML.innerHTML = "Q" +state.questionNumber + ": " + questionTitle;

///QUESTION NUMBERS

// Displaying total number of questions
//Step 1. find all questions
let numberOfQuestions = state.questions;

//Step 2. count all questions
let totalNumberOfQuestions = numberOfQuestions.length;


// Displays question number in HTML
let questionNumberHTML = document.getElementById("question-num");
questionNumberHTML.innerHTML = "Question: " + state.questionNumber + "/ " + totalNumberOfQuestions;




console.log(numberOfQuestions.length);
console.log(totalNumberOfQuestions);

//Button event listeners
let buttonTrue = document.getElementById("true");
buttonTrue.addEventListener("click", function() {
});

let buttonFalse = document.getElementById("false");
buttonFalse.addEventListener("click", function() {
});






