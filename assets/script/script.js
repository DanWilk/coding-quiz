var questionEl = document.querySelector('#question-area');
var answerEL = document.querySelector('#answer-area');
var highscoreEL = document.querySelector('#highscores');

var questionTextEl = document.createElement('h1');
questionTextEl.textContent = ('Press the button to start the quiz');
questionEl.appendChild(questionTextEl);

highscoreEL.addEventListener('click', function() {
    questionTextEl.textContent = ('Highscores');
});

var quizContent [
    { 'question': 'what is the number?',
      'choice1': '1',
      'choice2': '2',
      'choice3': '3',
      'choice4': '4', 
      'answer': '3'
};
]