'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 6;
let highScore = 0;
function displayMessage (message){
    document.querySelector('.message').textContent = message;
}
document.querySelector('.score').textContent = score;
document.querySelector('.check').addEventListener('click', function(){
    let guess = Number(document.querySelector('.guess').value);
    if(score>1){
    if(!guess){
        displayMessage('No number ⛔');
    }else if(guess === secretNumber){
        document.querySelector('.number').textContent = secretNumber;
        displayMessage('Correct Number!🤠')
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score>highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }else if (guess!==secretNumber){
        guess<secretNumber?displayMessage('Too Low 📉'):displayMessage('Too High 📈');
        score--;
        document.querySelector('.score').textContent = score;
    }}
    else{
         displayMessage('Uh oh, You lost the game!😒');
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor = '#FF0000'
    }
document.querySelector('.again').addEventListener('click', function(){
    score = 6;
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.score').textContent = 6;
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = null;
    document.querySelector('.number').style.width = '15rem';

    
})
    

})

