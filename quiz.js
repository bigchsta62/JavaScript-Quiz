const startButton = document.getElementById('start-btn');

const questionElement = document.getElementById('question-container')
const aBtnsElement = document.getElementById('answer-buttons');


let shuffledQs, currentQs

startButton.addEventListener('click', startGame);


function startGame() {
    console.log('startGame works');
    startButton.classList.add('hide');
    shuffledQs = questions.sort(() => Math.random() - .5);
    currentQs = 0
    questionElement.classList.remove('hide');
    nextQuestion();
}

function nextQuestion() {
    showQ(shuffledQs[currentQs]);
}

function showQ(question) {
questionElement.innerText = question.question
}

function selectAnswer() {

}

const questions = [
    {
        question: 'What is 2+2',
        answers: [
            { text: '4', correct: true },
            {text: '22', correct: false }
        ]
    }
];


// const question1 = ('Is JavaScript is a full-fledged dynamic ___________________ that can add interactivity to a website?');
// const question2 = ('');
// const question3 = ('');
// const question4 = ('');

// // for (let i = 0; i < array.length; i++) {
// //     const element = array[i];
    
// // }



// const answers = ('programming language');



// for (let i = 0; i < answers; i++) {
//     const answerBtn = document.createElement('BUTTON');
//     answerBtn.setAttribute('choices', answers[i]);
//     document.getElementById('ansBtns').appendChild(answerBtn);
    
// }


