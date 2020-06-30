const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const qContainer = document.getElementById('question-container');
const qElement = document.getElementById('question')
const aBtnsElement = document.getElementById('answer-buttons');

const lastScore = localStorage.setItem('lastScore', []);
const scoreText = document.getElementById('score');
const correctPoints = 10;
const wrongPoints = 0;

//I don't know why the const downLaoadTimer works
//, but it made the last question go away and show
// the High Scores button, even with time left.
//Without it, the last questions would stay until the timer ran out.
const downloadTimer = 'setInterval()';
let shuffledQs, currentQs;
let score = 0;
let timeleft = 59;



startButton.addEventListener('click', () => {
    startGame();
    //quiz timer
    setInterval(function () {
        if (timeleft < 0) {
            localStorage.setItem('lastScore', score);
            clearInterval(downloadTimer);
            document.getElementById("countdown");
            return window.location.assign('/scores.html');            
        } else {
            document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
        };
        timeleft -= 1;
    }, 1000);
});
nextButton.addEventListener('click', () => {
    currentQs++;
    nextQuestion();

});

// function to be called to start the quiz
function startGame() {
    // console.log('startGame works');

    score = 0;
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




// I found out on stack overflow, that I needed to call my timer inside
// the startButton click event or it would start as soon as the script loaded.

// const downloadTimer = setInterval(function () {
//     if (timeleft < 0) {
//         clearInterval(downloadTimer);
//         document.getElementById("countdown");
//         qContainer.classList.add('hide');
//         highScoresBtn.classList.remove('hide');


//     } else {
//         document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
//     };
//     timeleft -= 1;
// }, 1000);




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
        clearInterval(downloadTimer);
        localStorage.setItem('lastScore', score);   
        return window.location.assign('scores.html');
    };
};


function rightOrWrong(element, correct) {
    resetRW(element);
    if (correct) {
        element.classList.add('correct');
        incrementScore(correctPoints);
    } else {
        element.classList.add('wrong');
        timeleft -= 1;  
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

incrementScore = (num) => {
    score += num;
    scoreText.innerText = score;
};



