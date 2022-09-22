const state = {
    endGame: false,
    questionNumber: 0,
    scoreNumber: 1,
    questions: [{
            title: 'A guitar has 5 strings',
            answer: false,
            playerAnswer: null,
            playerCorrect: null,
            used: false,
            activeQuestion: false,
        },
        {
            title: 'A trumpet is a woodwind instrument',
            answer: false,
            playerAnswer: null,
            playerCorrect: null,
            used: false,
            activeQuestion: false,
        },
        {
            title: 'Tempo is how fast a song is played',
            answer: true,
            playerAnswer: null,
            playerCorrect: null,
            used: false,
            activeQuestion: false,
        },
        {
            title: "Hip hop originated in the 1980's",
            answer: true,
            playerAnswer: null,
            playerCorrect: null,
            used: true,
            activeQuestion: false,
        },
        {
            title: "The Xylophone is a percussion instrument",
            answer: true,
            playerAnswer: null,
            playerCorrect: null,
            used: true,
            activeQuestion: false,
        },
        {
            title: "The guitar has three main parts: The body, the neck and the head",
            answer: true,
            playerAnswer: null,
            playerCorrect: null,
            used: true,
            activeQuestion: false,
        },
        {
            title: "The biggest drum in a drum kit is called the 'snare drum'",
            answer: false,
            playerAnswer: null,
            playerCorrect: null,
            used: true,
            activeQuestion: false,
        },
        {
            title: "The white notes on the piano are tuned to: A B C D E F G H I..'",
            answer: false,
            playerAnswer: null,
            playerCorrect: null,
            used: true,
            activeQuestion: false,
        },
     /*   {
            title: "A chord is created when you play more than one note/tone at the same time'",
            answer: true,
            playerAnswer: null,
            playerCorrect: null,
            used: false,
            activeQuestion: false,
        },
        {
            title: "A hi-hat is an instrument",
            answer: true,
            playerAnswer: null,
            playerCorrect: null,
            used: false,
            activeQuestion: false, 
        },*/
    ]
}

//find number of unused questions
//pick a random number

function nextQuestion() {
    let unusedQuestions = state.questions.filter(x => !x.used);
    let newQuestion = unusedQuestions[Math.floor(Math.random() * unusedQuestions.length)];
    newQuestion.activeQuestion = true; 
    return newQuestion;
}


document.addEventListener("DOMContentLoaded", function () {
    updateHtmlFromState();
    addListenersToButtons();
})

let currentQuestion = nextQuestion();

function updateHtmlFromState() {
nextQuestion();
currentQuestion;

console.log('------------andy Line 110 currentQuestion', currentQuestion);

    
    
    let currentQuestionNumber = state.questionNumber;
        let totalNumberOfQuestions = state.questions.length;
        let questionNumber = state.questionNumber;
        let questionNumberHTML = document.getElementById("question-num");

    if (state.questionNumber === state.questions.length) {
        let playAgainButton = document.getElementById('play-again-button');
        playAgainButton.style.visibility = 'visible';
        let numberOfCorrectAnswers = state.questions.filter(x => x.playerCorrect).length;
        let finalScore = numberOfCorrectAnswers;
        questionNumberHTML.innerHTML = "End Of Game";
        let questionTextHTML = document.getElementById("text");
        questionTextHTML.innerHTML = 
        `<p text-align="center" >You scored: ${finalScore} out of ${totalNumberOfQuestions}!</p>`;

    } else {


        ///Displays Q number and counter

       // let currentQuestionNumber = state.questionNumber;
       // let totalNumberOfQuestions = state.questions.length;
       // let questionNumber = state.questionNumber;
       // let questionNumberHTML = document.getElementById("question-num");
        questionNumberHTML.innerHTML = "Question: " + state.scoreNumber + "/ " + totalNumberOfQuestions;
        let questionTitle = (state.questions[currentQuestionNumber].title);
        ///Adds question to html
        let questionTextHTML = document.getElementById("text");
        questionTextHTML.innerHTML =
        "Q" + state.scoreNumber + ": " + questionTitle;

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

        updateHtmlFromState()
    });

    let buttonPlayAgain = document.getElementById("play-again-button");
    buttonPlayAgain.addEventListener("click", function(){
        console.log('------------andy hello');
        buttonPlayAgain.style.visibility = "hidden";
        state.questionNumber = 0;
        state.scoreNumber = 1;
        updateHtmlFromState();
    })
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
    state.scoreNumber++;
    

};



/// TO DO!
// Add more text to end screen 
// Add styling to game
// Add random to questions
