const state = {
    endGame: false,
    questionNumber: 0,
    score: 0,
    questions: [{
            title: 'A guitar has 5 strings',
            answer: false,
            playerAnswer: null,
            playerCorrect: null,
            used: false,
        },
        {
            title: 'A trumpet is a woodwind instrument',
            answer: false,
            playerAnswer: null,
            playerCorrect: null,
            used: false,
        },
        {
            title: 'Tempo is how fast a song is played',
            answer: true,
            playerAnswer: null,
            playerCorrect: null,
            used: false,
        },
        {
            title: "Hip hop originated in the 1980's",
            answer: true,
            playerAnswer: null,
            playerCorrect: null,
            used: false,
        },
        {
            title: "The Xylophone is a percussion instrument",
            answer: true,
            playerAnswer: null,
            playerCorrect: null,
            used: false,
        },
        {
            title: "The guitar has three main parts: The body, the neck and the head",
            answer: true,
            playerAnswer: null,
            playerCorrect: null,
            used: false,
        },
        {
            title: "The biggest drum in a drum kit is called the 'snare drum'",
            answer: false,
            playerAnswer: null,
            playerCorrect: null,
            used: false,
        },
        {
            title: "The white notes on the piano are tuned to: A B C D E F G H I..'",
            answer: false,
            playerAnswer: null,
            playerCorrect: null,
            used: false,
        },
        {
            title: "A chord is created when you play more than one note/tone at the same time'",
            answer: true,
            playerAnswer: null,
            playerCorrect: null,
            used: false,
        },
        {
            title: "A hi-hat is an instrument",
            answer: true,
            playerAnswer: null,
            playerCorrect: null,
            used: false,
        },
    ]
}

//find number of unused questions
//pick a random number

function nextQuestion() {
    let unusedQuestions = state.questions.filter(x => !x.used);
    let me = unusedQuestions;
    return me;
    //let selectNextQuestion = unusedQuestions[Math.floor() *unusedQuestions];
   // return unusedQuestions;
    
}



document.addEventListener("DOMContentLoaded", function () {
    updateHtmlFromState();
    addListenersToButtons();
})

function updateHtmlFromState() {
    nextQuestion();
console.log('------------andy Line 97 nextQuestion', nextQuestion());
    
    
    let currentQuestionNumber = state.questionNumber;
        let totalNumberOfQuestions = state.questions.length;
        let questionNumber = state.questionNumber;
        let questionNumberHTML = document.getElementById("question-num");

    if (state.questionNumber === state.questions.length) {

        let numberOfCorrectAnswers = state.questions.filter(x => x.playerCorrect).length;
        let finalScore = numberOfCorrectAnswers;
        questionNumberHTML.innerHTML = "End Of Game";
        let questionTextHTML = document.getElementById("text");
        questionTextHTML.innerHTML = 
        'You scored: ' + finalScore + ' out of ' + totalNumberOfQuestions + '!';


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
// Add more text to end screen 
// question numbers
// Add styling to game
// Add random to questions
