//This page was influenced by James Q Quick https://www.youtube.com/channel/UC-T8W79DN6PBnzomelvqJYw and his Youtube videos on a guiz game 

const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const lastScore = localStorage.getItem('lastScore');
const topFiveList = document.getElementById('topFiveList');
const highScores = JSON.parse(localStorage.getItem('highScores'));


//I havent been able to get this code to completely work. Score is not selected
//and it returns the values incorrectly onto the page
topFiveList.innerHTML = highScores
.map(score => {
   return '<li class="high-score">${score.name}-${score.score}</li>'
}).join('')


console.log('highScores');




finalScore.innerText = lastScore;




const topFive = 5;

// const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// console.log(JSON.parse(localStorage.getItem('highScores')));
finalScore.innerText = lastScore;

username.addEventListener('keyup', () => {
    // console.log(username.value);
    saveScoreBtn.disabled = !username.value;
});

saveScore = e => {
    console.log('clicked save btn');
    e.preventDefault();

    const score = {
        score: Math.floor(Math.random() * 100),
        name: username.value
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    // window.location.assign('/');

};

