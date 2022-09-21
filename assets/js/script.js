const state = {
    endGame: false,
    questionNumber: 0,
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
            title: 'Question 4 - False',
            answer: false,
            playerAnswer: null,
            playerCorrect: null,
            used: false,
        },
    ]
}

let unusedQuestionsCount = state.questions.filter(x => !x.used).length;

document.addEventListener("DOMContentLoaded", function () {
    updateHtmlFromState();
    addListenersToButtons();
})

function updateHtmlFromState() {
    let currentQuestionNumber = state.questionNumber;
        let totalNumberOfQuestions = state.questions.length;
        let questionNumber = state.questionNumber;
        let questionNumberHTML = document.getElementById("question-num");

    if (state.questionNumber === state.questions.length) {

        let numberOfCorrectAnswers = state.questions.filter(x => x.playerCorrect).length;
        let finalScore = numberOfCorrectAnswers;
        questionNumberHTML.innerHTML = "End Of Game";
        let questionTextHTML = document.getElementById("text");
        questionTextHTML.innerHTML = "End Of Game! You scored: " + finalScore;
        

        console.log('------------andy Line 55 numberOfCorrectAnswers', numberOfCorrectAnswers);
        console.log('------------andy Line 37 state.questions', state.questions);
    } else {


        ///Displays Q number and counter
        console.log('------------andy Line 37 state.questions', state.questions);

       // let currentQuestionNumber = state.questionNumber;
       // let totalNumberOfQuestions = state.questions.length;
       // let questionNumber = state.questionNumber;
       // let questionNumberHTML = document.getElementById("question-num");
        questionNumberHTML.innerHTML = "Question: " + questionNumber + "/ " + totalNumberOfQuestions;
        let questionTitle = (state.questions[currentQuestionNumber].title);
        ///Adds question to html
        let questionTextHTML = document.getElementById("text");
        questionTextHTML.innerHTML = "Q" + questionNumber + ": " + questionTitle;

    }

}
/**
 * True and False Buttons
 */
function addListenersToButtons() {
    let buttonTrue = document.getElementById("true");
    buttonTrue.addEventListener("click", function () {
        updateState(true);
        updateHtmlFromState()
    });

    let buttonFalse = document.getElementById("false");
    buttonFalse.addEventListener("click", function () {
        updateState(false);
        console.log('------------andy Line 74 state', state);

        updateHtmlFromState()
    });
}

/**
 * Compares answer
 * Updates .playerCorrect
 * Updates .used 
 */
function updateState(playerAnswer) {
    
    let currentQuestionNumber = state.questionNumber;
    state.questions[currentQuestionNumber].used = true;
    let questionAnswer = state.questions[currentQuestionNumber].answer;

    if (playerAnswer === questionAnswer) {
        state.questions[currentQuestionNumber].playerCorrect = true;
    } else {
        state.questions[currentQuestionNumber].playerCorrect = false;
    }
    state.questionNumber++;
    console.log('------------andy Line 105 Updated');
    

};



/// TO DO!
/// 
//Does 'questions.used' = questions.length'
//if true = game is over 
// Display score 