var questionEl = document.querySelector('#question-area');
var answerEL = document.querySelector('#answer-area');
var highscoreEL = document.querySelector('#highscores');
var buttonList = document.querySelector('#button-list');
var questionTextEl = document.querySelector('#question');
var counter = 0;
var questionNumber = 0;
var timerFunc = 10;
var quizContent  = [
    {
        question: 'Press the button to start the quiz',
        choices: ['Start quiz'],
    },

    { 
        question: 'which is a boolean value?',
        choices: ['4', 'var', 'true', 'string'],
        answer: '3'
    },

    {
        question: 'which is an html tag?',
        choices: ['var', '<h1>', 'function()', 'class'],
        answer: '2'
    },

    {
        question: 'how is a function called?',
        choices: ['function()', 'var function()', 'func()', 'var'],
        answer: '1'
    },

    {
        question: 'hw is a function called?',
        choices: ['function()', 'var function()', 'func()', 'var'],
        answer: '1'
    },

    {
        question: 'how is a function called?',
        choices: ['function()', 'var function()', 'func()', 'var'],
        answer: '1'
    },

    {
        question: 'how is a function called?',
        choices: ['function()', 'var function()', 'func()', 'var'],
        answer: '1'
    }
]
// creating the timer
var timer = function() {
    var timerArea = document.querySelector('#timer-div');
    timerArea.textContent = timerFunc;
    timerFunc = timerFunc - 1; 
}
// creating the quiz
var createQuiz = function() {
    
    
        questionTextEl.textContent = quizContent[questionNumber].question;
        
    for (q = 0; q < quizContent[questionNumber].choices.length; q++) {

        var answerChoicesEl = document.createElement('li');
        answerChoicesEl.innerHTML = '<button id="answer-choice">' + quizContent[questionNumber].choices[q] + '</button>';
        buttonList.appendChild(answerChoicesEl);
        counter++

    }
    
    

    questionNumber++
    return questionNumber
};

// starting the quiz and moving through questions
var startQuiz = function() {

    if (questionNumber === 1) {
        questionTextEl.textContent = quizContent[questionNumber].question;
    
        for (q = 0; q < quizContent[questionNumber].choices.length; q++) {

            var answerChoicesEl = document.createElement('li');
            answerChoicesEl.innerHTML = '<input type="button" id="answer-choice' + counter + '" value="' + quizContent[questionNumber].choices[q] + '">';
            buttonList.appendChild(answerChoicesEl);
            counter++;
        }

        questionNumber++
        return questionNumber
    } else if (questionNumber > 1 && questionNumber < 10) {
    
        questionTextEl.textContent = quizContent[questionNumber].question;
    
        for (q = 0; q < quizContent[questionNumber].choices.length; q++) {

            var answerChoice1El = document.querySelector('#answer-choice1');
            answerChoice1El.textContent = quizContent[questionNumber].choices[0];

            var answerChoice2El = document.querySelector('#answer-choice2');
            answerChoice2El.textContent = quizContent[questionNumber].choices[1];

            var answerChoice3El = document.querySelector('#answer-choice3');
            answerChoice3El.textContent = quizContent[questionNumber].choices[2];

            var answerChoice4El = document.querySelector('#answer-choice4');
            answerChoice4El.textContent = quizContent[questionNumber].choices[3];



            questionNumber++
            return questionNumber
        }
    } else {

    }

};
//var checkAnswer = function() {
//    var choice = this.value;
//    console.log(choice);
//    if (choice === quizContent[questionNumber].answer) {
//        console.log('correct');
//    }

//}

createQuiz();
console.log(questionNumber)
var answerSelect = document.querySelector('#button-list');
var quizStart = document.querySelector('#answer-choice');
// creating a variable to set timer
var time = function() {
    setInterval(timer, 1000)
}
answerSelect.addEventListener('click', startQuiz);
quizStart.addEventListener('click', time);
