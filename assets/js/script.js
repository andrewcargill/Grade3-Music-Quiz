const state = {
    questionNumber: 1,
    score: 0,
    questions: [{
            title: 'Question 1 - True',
            answer: true,
            playerAnswer: null,
            playerCorrect: null,
            used: false,
        },
        {
            title: 'Question 2 - Answer is true',
            answer: true,
            playerAnswer: null,
            playerCorrect: null,
            used: false,
        },
        {
            title: 'Question 3 - False',
            answer: false,
            playerAnswer: null,
            playerCorrect: null,
            used: false,
        },
        {
            title: 'Question 4 - Answer is true',
            answer: true,
            playerAnswer: null,
            playerCorrect: null,
            used: false,
        },
        {
            title: 'Question 5 - False',
            answer: false,
            playerAnswer: null,
            playerCorrect: null,
            used: false,
        },
        {
            title: 'Question 6 - Answer is true',
            answer: true,
            playerAnswer: null,
            playerCorrect: null,
            used: false,
        },
    ]
}

///QUESTION COUNTER
let allQuestions = state.questions;
let totalNumberOfQuestions = allQuestions.length;

let questionNumber = state.questionNumber;
let questionNumberHTML = document.getElementById("question-num");


let go = runQuestion();

///Starts the game and loops round for each question

function runQuestion() {
console.log(state);
   
    ///Game question number
    questionNumberHTML.innerHTML = "Question: " + questionNumber + "/ " + totalNumberOfQuestions;

    ///START OF GAME
    //SELECT AND DISPLAY NEXT QUESTION
    //1. Check to see what questions have been used already in the game
    let usedQuestions = state.questions.filter(question => !question.used);
    console.log(usedQuestions);

    //2. From the unused questions - randomly select one
    let random = Math.floor(Math.random() * usedQuestions.length);
    let nextQuestion = usedQuestions[random];
    /*let nextQuestion = (random, usedQuestions[random]);*/

    //3. Selects where question will be shown in HTML
    let questionTitle = (nextQuestion["title"]);

    //4. Displays question in html question container
    let questionTextHTML = document.getElementById("text");
    questionTextHTML.innerHTML = "Q" + questionNumber + ": " + questionTitle;

    //Finds out answer to question
    let questionAnswer = nextQuestion["answer"];

///Wait for Player to answer///


    //If player clicks 'true' / compares answer and updates player correct
    let buttonTrue = document.getElementById("true");
    buttonTrue.addEventListener("click", function () {

        nextQuestion.playerAnswer = true;
        updateState();
    });

    //If player clicks 'false' / compares answer and updates player correct
    let buttonFalse = document.getElementById("false");
    buttonFalse.addEventListener("click", function () {

        nextQuestion.playerAnswer = false;
        updateState();
    });

    /// Compare player answer to question answer and update state

    function updateState() {
        if (nextQuestion.playerAnswer === questionAnswer) {
            nextQuestion.playerCorrect = true;
            nextQuestion.used = true;
            questionNumber++;
            runQuestion();
        } else {
            nextQuestion.playerCorrect = false;
            nextQuestion.used = true;
            questionNumber++;
            runQuestion();
        }
    console.log("question at end of chain", nextQuestion);
    console.log("state at end of chain", state);
    };


};

/// TO DO!
//Does 'questions.used' = questions.length'
//if true = game is over 
// Display score 