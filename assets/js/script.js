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

///START OF GAME
    //SELECT AND DISPLAY NEXT QUESTION
    //Check to see what questions have been used already in the game
    let usedQuestions = state.questions.filter(question => !question.used);

    //From the unused questions - randomly select one
    let currentQuestionNumber = Math.floor(Math.random() * usedQuestions.length);

///DOM update state & listeners

///Starts the game and loops round for each question

function updateHtmlFromState() {


    ///QUESTION COUNTER
    let allQuestions = state.questions;
    let totalNumberOfQuestions = allQuestions.length;

    let questionNumber = state.questionNumber;
    let questionNumberHTML = document.getElementById("question-num");
    questionNumberHTML.innerHTML = "Question: " + questionNumber + "/ " + totalNumberOfQuestions;

    

    let questionTitle = (state.questions[currentQuestionNumber].title);
    console.log('------------andy Line 75 questionTitle', questionTitle);
    
    //4. Displays question in html question container
    let questionTextHTML = document.getElementById("text");
    questionTextHTML.innerHTML = "Q" + questionNumber + ": " + questionTitle;
};

updateHtmlFromState();

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
};

addListenersToButtons()

function updateState(playerAnswer) {
    let questionAnswer = state.questions[currentQuestionNumber].answer;
    if (playerAnswer === questionAnswer) {
        state.questions[currentQuestionNumber].playerCorrect = true;
    } else {
        state.questions[currentQuestionNumber].playerCorrect = false;
    }
    state.questions[currentQuestionNumber].used = true;
    state.questionNumber++;
    console.log('------------andy Line 109 ', );
    
};



/// TO DO!
/// 
//Does 'questions.used' = questions.length'
//if true = game is over 
// Display score 