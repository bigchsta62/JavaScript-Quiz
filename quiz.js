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
    while (aBtnsElement.firstChild) {
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
    // if (clickedBtn.dataset = correct) {
    //     countRightAns++;
    //  // +1, change it if you need +10, +25 etc
    //  }
    //  document.getElementById('right-answers').innerHTML = countRightAns;

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
        question: 'JavaScript ("JS" for short) is a full-fledged ______________ that can add interactivity to a website.',
        answers: [
            { text: 'rabbit hole of information', correct: false },
            { text: 'dynamic programming language', correct: true },
            { text: 'interdimensional portal', correct: false },
            { text: 'box', correct: false }
        ]
    },

    {
        question: 'Who invented JvaScript?',
        answers: [
            { text: 'Bill Gates', correct: false },
            { text: 'Joey Tribbiani', correct: false },
            { text: 'Brendan Eich', correct: true },
            { text: 'Post Malone', correct: false }
        ]
    },
    {
        question: 'JavaScript first debuted in the AOL Instant Messenger service.',
        answers: [
            { text: 'False', correct: true },
            { text: 'True', correct: false }
        ]
    },
    {
        question: 'Conditionals are code structures used to test if an expression returns true or not. A very common form of conditionals is the if ... else statement.',
        answers: [
            { text: 'True', correct: true },
            { text: 'False', correct: false }
        ]
    },
    {
        question: 'Which of the follwing would link an HTML page to Javascrip',
        answers: [
            { text: 'put that Java over here', correct: false },
            { text: '<link rel="stylesheet" href="style.css">', correct: false },
            { text: '<p id="right-answers"></p>', correct: false },
            { text: '<script src="javaScript.js"></script>', correct: true }
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


