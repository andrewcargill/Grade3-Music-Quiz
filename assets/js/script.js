

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


/*Question number HTML container*/
let questionNumberHTML = document.getElementById("question-num");
questionNumberHTML.innerHTML = "Question: " + state.questionNumber;

/*Display Question */
let questionTextHTML = document.getElementById("text");
questionTextHTML.innerHTML = "This is to test that JS is talking to the question container";

//Button event listeners
let buttonTrue = document.getElementById("true");
buttonTrue.addEventListener("click", function() {
});

let buttonFalse = document.getElementById("false");
buttonFalse.addEventListener("click", function() {
});



console.log(questionNumberHTML);


