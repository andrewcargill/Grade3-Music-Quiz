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
    ]
}

/**
 * How do I access 'current Question number' across the different functions?
 * Such as updating state.questions.playerCorrect / state.questions.used
 * 
 * Should I rethink how I am doing things?
 */


/**
 * Looks at State for un-used questions and randomly selects a question
 */

    let unusedQuestions = state.questions.filter(question => !question.used);
    
    let currentQuestionNumber = Math.floor(Math.random() * unusedQuestions.length);

    document.addEventListener("DOMContentLoaded", function() {
        updateHtmlFromState();
        addListenersToButtons();
    })


function updateHtmlFromState() {
    unusedQuestions = state.questions.filter(question => !question.used);

    ///Displays Q number and counter
    let allQuestions = state.questions;
    let totalNumberOfQuestions = allQuestions.length;

    let questionNumber = state.questionNumber;
    let questionNumberHTML = document.getElementById("question-num");
    questionNumberHTML.innerHTML = "Question: " + questionNumber + "/ " + totalNumberOfQuestions;


    let questionTitle = (state.questions[currentQuestionNumber].title);
console.log('------------andy Line 77 usedQuestions', usedQuestions);
console.log('------------andy Line 78 state.questions', state.questions);
console.log('------------andy Line 80 current question', state.questions[currentQuestionNumber].title);
    
    
    ///Adds question to html
    let questionTextHTML = document.getElementById("text");
    questionTextHTML.innerHTML = "Q" + questionNumber + ": " + questionTitle;
}


/**
 * True and False Buttons
 */

function addListenersToButtons () {
    let buttonTrue = document.getElementById("true");
    buttonTrue.addEventListener("click", function () {
        updateState(true);
        currentQuestionNumber = Math.floor(Math.random() * usedQuestions.length);
        updateHtmlFromState()
    });

    let buttonFalse = document.getElementById("false");
    buttonFalse.addEventListener("click", function () {
        updateState(false);
        currentQuestionNumber = Math.floor(Math.random() * usedQuestions.length);
        updateHtmlFromState()
    });
}

/**
 * Compares answer and updates state
 *  
 */
function updateState(playerAnswer) {
    let questionAnswer = state.questions[currentQuestionNumber].answer;
    if (playerAnswer === questionAnswer) {
        state.questions[currentQuestionNumber].playerCorrect = true;
    } else {
        state.questions[currentQuestionNumber].playerCorrect = false;
    }
    state.questions[currentQuestionNumber].used = true;
    state.questionNumber++;
};



/// TO DO!
/// 
//Does 'questions.used' = questions.length'
//if true = game is over 
// Display score 