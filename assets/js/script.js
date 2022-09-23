/*

if(!username){
    window.location = '/index.html'
}

*/

/**
 * Controls the game and Question number display
 */
const state = {
    endGame: false,
    questionNumber: 0,
    scoreNumber: 1,
};

/**
 * Questions for the game
 */
let questions = [{
        title: 'A guitar has 5 strings',
        answer: false,
        playerAnswer: null,
        playerCorrect: null,
    },
    {
        title: 'A trumpet is a woodwind instrument',
        answer: false,
        playerAnswer: null,
        playerCorrect: true,
    },
    {
        title: 'Tempo is how fast a song is played',
        answer: true,
        playerAnswer: null,
        playerCorrect: null,
    },
    {
        title: "Hip hop originated in the 1980's",
        answer: true,
        playerAnswer: null,
        playerCorrect: null,
    }, {
        title: "The Xylophone is a percussion instrument",
        answer: true,
        playerAnswer: null,
        playerCorrect: null,
    },
    {
        title: "The guitar has three main parts: The body, the neck and the head",
        answer: true,
        playerAnswer: null,
        playerCorrect: null,
    },
    {
        title: "The biggest drum in a drum kit is called the 'snare drum'",
        answer: false,
        playerAnswer: null,
        playerCorrect: null,
    },
    {
        title: "The white notes on the piano are tuned to: A B C D E F G H I..'",
        answer: false,
        playerAnswer: null,
        playerCorrect: null,
    },
    {
        title: "A chord is created when you play more than one note/tone at the same time",
        answer: true,
        playerAnswer: null,
        playerCorrect: null,
    },
    {
        title: "A hi-hat is an instrument",
        answer: true,
        playerAnswer: null,
        playerCorrect: null,
    },
];

function previousQuestionUserFeedback() {
    ///Players Name
    
    /// Selects the previous question
    let previousQuestionNumber = state.questionNumber - 1;
    let previousQuestion = questions[previousQuestionNumber];
    /// Finds text-display HTML element
    let textDisplay = document.getElementById("text-display")
    
    /// Displays info
    let previousQuestionHTML = document.getElementById("previous-question-text");
    previousQuestionHTML.style.visibility = "visible";
    if (previousQuestion.playerCorrect === true) {
        previousQuestionHTML.innerHTML = `<i id="right-answer-icon" class="fa-solid fa-check"></i> Well done ${username} that was correct!`;
        textDisplay.style.borderColor = "green";
    } else {
        previousQuestionHTML.innerHTML = `<i id="wrong-answer-icon" class="fa-solid fa-xmark"></i> Unlucky ${username} that was wrong. Try this one...`;
        textDisplay.style.borderColor = "red";
    }
    
}

// https://sebhastian.com/fisher-yates-shuffle-javascript/
// shuffles the 'questions' array

function fyShuffle(arr) {
    let i = arr.length;
    while (--i > 0) {
        let randIndex = Math.floor(Math.random() * (i + 1));
        [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
    }
    return arr;
}

///Username
let username = localStorage.getItem("username");

//Calls on questions to be shuffled
let shuffledArray = fyShuffle(questions);


/// On load up
document.addEventListener("DOMContentLoaded", function () {
    updateHtmlFromState();
    addListenersToButtons();
});


/**
 * Updates HTML for each question and end of game
 */
function updateHtmlFromState() {

    let questionNumber = state.questionNumber;
    let currentQuestion = (shuffledArray[questionNumber]);
    let totalNumberOfQuestions = questions.length;
    let questionNumberHTML = document.getElementById("question-num");

    if (questionNumber >= 1) {
        console.log("number is above 0");
        previousQuestionUserFeedback(); 
    }else {
        console.log("number is 0");
    }

///When end of game is reached - score is displayed and play again button
    if (state.questionNumber === questions.length) {
        let playAgainButton = document.getElementById('play-again-button');
        playAgainButton.style.visibility = 'visible';
        let logOutButton = document.getElementById('log-out-button');
        logOutButton.style.visibility = 'visible';
        let previousQuestionHTML = document.getElementById("previous-question-text");
        previousQuestionHTML.style.visibility = "hidden";
        let numberOfCorrectAnswers = questions.filter(x => x.playerCorrect).length;
        let finalScore = numberOfCorrectAnswers;
        questionNumberHTML.innerHTML = "Game Over";
        let questionTextHTML = document.getElementById("text");
        let textDisplay = document.getElementById("text-display")
        textDisplay.style.borderColor = "black";
        questionTextHTML.style.textAlign = "center";
        questionTextHTML.innerHTML =
            `${username}, you scored: ${finalScore} out of ${totalNumberOfQuestions}!`;

    } else { ///Displays Question number and Question
        questionNumberHTML.innerHTML =  + state.scoreNumber + "/ " + totalNumberOfQuestions;
        let questionTextHTML = document.getElementById("text");
        questionTextHTML.style.textAlign = "left";
        questionTextHTML.innerHTML =
        currentQuestion.title;
    }
}

/**
 * Button listeners (True / False / Play Again)
 */
function addListenersToButtons() {

    let buttonTrue = document.getElementById("true");
    buttonTrue.addEventListener("click", function () {
        updateState(true);
        updateHtmlFromState();
    });

    let buttonFalse = document.getElementById("false");
    buttonFalse.addEventListener("click", function () {
        updateState(false);
        updateHtmlFromState();
    });

    let buttonPlayAgain = document.getElementById("play-again-button");
    buttonPlayAgain.addEventListener("click", function () {
        buttonPlayAgain.style.visibility = "hidden";
        state.questionNumber = 0;
        state.scoreNumber = 1;
        fyShuffle(questions);
        updateHtmlFromState();
        
    });
}

/**
 * Updates current questions values
 */
function updateState(playerAnswer) {
    let questionNumber = state.questionNumber;
    let currentQuestion = (shuffledArray[questionNumber]);

    if (playerAnswer === currentQuestion.answer) {
        currentQuestion.playerCorrect = true;
    } else {
        currentQuestion.playerCorrect = false;
    }
    state.questionNumber++;
    state.scoreNumber++;
}
