const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const qContainer = document.getElementById('question-container');
const qElement = document.getElementById('question')
const aBtnsElement = document.getElementById('answer-buttons');


let shuffledQs, currentQs
let countRightAns = 0;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQs++;
    nextQuestion()
})


function startGame() {
    // console.log('startGame works');
    countRightAns = 0;
    startButton.classList.add('hide');
    shuffledQs = questions.sort(() => Math.random() - .5);
    currentQs = 0
    qContainer.classList.remove('hide');
    nextQuestion();
}

function nextQuestion() {
    resetJumbo()
    showQ(shuffledQs[currentQs]);
}

function showQ(question) {
    qElement.innerText = question.question
    question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text
    button.classList.add('btn', 'btn-outline-secondary');
    if (answer.correct) {
        button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', answerPick)
    aBtnsElement.appendChild(button);
})
}

function resetJumbo() {
    resetRW(document.body);
    nextButton.classList.add('hide');
    while (aBtnsElement.firstChild){
        aBtnsElement.removeChild
        (aBtnsElement.firstChild)
    }
}

function answerPick(e) {
    const clickedBtn = e.target;
    const correct = clickedBtn.dataset.correct;
    rightOrWrong(document.body, correct);
    Array.from(aBtnsElement.children).forEach(button => {
        rightOrWrong(button, button.dataset.correct);
    });
    if (shuffledQs.length > currentQs + 1) {
        nextButton.classList.remove('hide');    
    } else {
        startButton.innerText = 'Game Over';
        startButton.classList.remove('hide');
    }
    if (clickedBtn.dataset = correct) {
        countRightAns++;
     // +1, change it if you need +10, +25 etc
     }
     document.getElementById('right-answers').innerHTML = countRightAns;
    
}

function rightOrWrong(element, correct) {
    resetRW(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function resetRW(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question: 'What is 2+2?',
        answers: [
            { text: '4', correct: true },
            {text: '22', correct: false }
        ]
    },
    
    {
        question: 'What is 2+2?',
        answers: [
            { text: '4', correct: true },
            {text: '22', correct: false }
        ]
    },
    {
        question: 'What is 2+2?',
        answers: [
            { text: '4', correct: true },
            {text: '22', correct: false }
        ]
    },
    {
        question: 'What is 2+2?',
        answers: [
            { text: '4', correct: true },
            {text: '22', correct: false }
        ]
    },
    {
        question: 'What is 2+2?',
        answers: [
            { text: '4', correct: true },
            {text: '22', correct: false }
        ]
    },

]


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


