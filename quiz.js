const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const qContainer = document.getElementById('question-container');
const qElement = document.getElementById('question')
const aBtnsElement = document.getElementById('answer-buttons');


let shuffledQs, currentQs;
let countRightAns = 0;

startButton.addEventListener('click', () => {
    startGame();
});
nextButton.addEventListener('click', () => {
    currentQs++;
    nextQuestion();
    setInterval();
});

// starts the Quiz
function startGame() {
    // console.log('startGame works');

    startButton.classList.add('hide');
    shuffledQs = questions.sort(() => Math.random() - .5);
    currentQs = 0
    qContainer.classList.remove('hide');
    nextQuestion();
    // startTimer();
};
// starts at random question each time the quiz is restarted
function nextQuestion() {
    resetJumbo()
    // resetTimer()
    showQ(shuffledQs[currentQs]);
};
// shows the current question and corresponding answers
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
    });
};
//resets the answer buttons
function resetJumbo() {
    resetRW(document.body);
    nextButton.classList.add('hide');
    while (aBtnsElement.firstChild) {
        aBtnsElement.removeChild
            (aBtnsElement.firstChild)
    };
};


//quiz timer
let timeleft = 15;

const downloadTimer = setInterval(function () {
    if (timeleft < 0) {
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Out of Time!";
        qContainer.classList.add('hide');
        startButton.innerText = 'Try Again';
        startButton.classList.remove('hide');

    } else {
        document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
    };
    timeleft -= 1;
}, 1000);




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
        startButton.innerText = 'High Scores';
        startButton.classList.remove('hide');
        qContainer.classList.add('hide');
        clearTimeout(downloadTimer);
    };
};




function rightOrWrong(element, correct) {
    resetRW(element);
    if (correct) {
        element.classList.add('correct');
        aBtnsElement.disabled = true;
    } else {
        element.classList.add('wrong');

    }
};

function resetRW(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
};

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
        question: 'Which of the follwing would link an HTML page to Javascript',
        answers: [
            { text: 'put that Java over here', correct: false },
            { text: '<link rel="stylesheet" href="style.css">', correct: false },
            { text: '<p id="right-answers"></p>', correct: false },
            { text: '<script src="javaScript.js"></script>', correct: true }
        ]
    },

]





