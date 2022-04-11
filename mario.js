const mario = document.getElementById('mario');
const pipe = document.getElementById('pipe');
const pipePlus = document.getElementById('pipe-2');
const jumpMusic = new Audio("jump-2.mp3");
const highScoreAudio = new Audio("highscore.mp3");
const gameOver = new Audio('gameOver.mp3')
var score = 0;
var highScore = 0;




function jump() {
    if (dispatchEvent.classList != jump)// to check if dino is in middle of the jump or not, If not make it jump//

    {
        mario.classList.add('jump');
        setTimeout(() => {
            mario.classList.remove('jump');//removes class list of 'jump' from dino after 300ms so that it could jump again.

        }, 400);

        jumpMusic.play();



    }
}

let checkAlive = setInterval(() => {
    let dinoTop = parseInt(window.getComputedStyle(mario).getPropertyValue('top'));
    let pipeLeft = parseInt(window.getComputedStyle(pipe).getPropertyValue('left'));//check of collision;
    let pipeRight = parseInt(window.getComputedStyle(pipePlus).getPropertyValue('left'));//check of collision;

    if (pipeLeft > 0 && pipeLeft < 40 && dinoTop >= 143 || pipeRight > 0 && pipeRight < 40 && dinoTop >= 143) {
        gameOver.play(); 
        mario.style.animationPlayState = "paused";
        pipe.style.animationPlayState = 'paused';
        myAudio.pause();
        getHighScore(score);
        location.reload();
        alert('Opps Game is over..!!');

    }


}, 10);

document.addEventListener('keydown', function (event) {
    jump();
    // score function


})



//function for score

var getScore = function scoreVal() {
    setInterval(() => {

        score += 1;
        document.getElementById('score').innerHTML = 'Score :' + score;
        console.log(score);
    }, 500);

}();
// scoreVal();




//function for hi- score
function getHighScore(score) {
    highScore = localStorage.getItem("newHighScore");
    if (score > highScore) {
        highScoreAudio.play();
        highScore = score;
        localStorage.setItem("newHighScore", score);
        document.getElementById('high-score').innerHTML = 'High-Score :' + highScore;
        console.log(`WoW new High Score ${highScore}`);
    }
};

// dispaly hightScore
var dispalyScore = function score() {
    highScore = localStorage.getItem("newHighScore");
    document.getElementById("high-score").innerHTML = 'High-Score :' + highScore;
}();



//function for background music
const myAudio = new Audio ('mario-music.mp3')

function playAudio() { 
    myAudio.play(); 
}; 

function pauseAudio() { 
    myAudio.pause(); 
};


myAudio.play(); 


// localStorage.clear();




