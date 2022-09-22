const state = {
    endGame: false,
    questionNumber: 0,
    scoreNumber: 1,
};

let questions = [{
        title: 'A guitar has 5 strings',
        answer: false,
        playerAnswer: null,
        playerCorrect: null,
        used: false,
        activeQuestion: false
    },
    {
        title: 'A trumpet is a woodwind instrument',
        answer: false,
        playerAnswer: null,
        playerCorrect: null,
        used: false,
        activeQuestion: false
    },
    {
        title: 'Tempo is how fast a song is played',
        answer: true,
        playerAnswer: null,
        playerCorrect: null,
        used: false,
        activeQuestion: false
    },
    {
        title: "Hip hop originated in the 1980's",
        answer: true,
        playerAnswer: null,
        playerCorrect: null,
        used: true,
        activeQuestion: false
    }, {
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
]


// https://sebhastian.com/fisher-yates-shuffle-javascript/
// shuffling an array

function fyShuffle(arr) {
    let i = arr.length;
    while (--i > 0) {
        let randIndex = Math.floor(Math.random() * (i + 1));
        [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
    }
    return arr;
}

let shuffledArray = fyShuffle(questions);


/// On load up
document.addEventListener("DOMContentLoaded", function () {
    updateHtmlFromState();
    addListenersToButtons();
})


/// Updates HTML for each question
function updateHtmlFromState() {
    let questionNumber = state.questionNumber;
    let currentQuestion = (shuffledArray[questionNumber]);

    console.log('------------andy Line 92 currentQuestion', currentQuestion);
    console.log('------------andy Line 93 questions', questions);
    


    let totalNumberOfQuestions = questions.length;
    let questionNumberHTML = document.getElementById("question-num");

    ///After last question screen
    if (state.questionNumber === questions.length) {
        let playAgainButton = document.getElementById('play-again-button');
        playAgainButton.style.visibility = 'visible';
        let numberOfCorrectAnswers = questions.filter(x => x.playerCorrect).length;
        let finalScore = numberOfCorrectAnswers;
        questionNumberHTML.innerHTML = "End Of Game";
        let questionTextHTML = document.getElementById("text");
        questionTextHTML.innerHTML =
            `<p text-align="center" >You scored: ${finalScore} out of ${totalNumberOfQuestions}!</p>`;

    } else {
        ///Displays Question number and Question
        questionNumberHTML.innerHTML = "Question: " + state.scoreNumber + "/ " + totalNumberOfQuestions;
        let questionTitle = (currentQuestion.title);
        let questionTextHTML = document.getElementById("text");
        questionTextHTML.innerHTML =
            "Q" + state.scoreNumber + ": " + currentQuestion.title;
    }
}

/// Button listeners
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
    buttonPlayAgain.addEventListener("click", function () {
        buttonPlayAgain.style.visibility = "hidden";
        state.questionNumber = 0;
        state.scoreNumber = 1;
        updateHtmlFromState();
    })
}

/// Compares player answer to question answer and update state




function updateState(playerAnswer) {
    let questionNumber = state.questionNumber;
let currentQuestion = (shuffledArray[questionNumber]);
    console.log('------------andy Line 170 Update State currentQuestion', currentQuestion);

    if (playerAnswer === currentQuestion.answer) {
        currentQuestion.playerCorrect = true;
    } else {
        currentQuestion.playerCorrect = false;
    }
    state.questionNumber++;
    state.scoreNumber++;
};



/// TO DO!
// Add more text to end screen 
// Add styling to game
// Add random to questions