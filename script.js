'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let  score = 20;
let highscore = 0;

const display_message = function(message){
    document.querySelector('.message').textContent = message;
}

const display_number = function(number){
    document.querySelector('.number').textContent = number;
}

const display_score = function(score){
    document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function(){
    const guess =  Number(document.querySelector('.guess').value);
    
    if(!guess){
        display_message('🤷‍♂️ No Number!');

    } else if(guess === secretNumber) {
        display_message('😎 Correct Number!');
        
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        display_number(secretNumber);

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if(guess != secretNumber){
        if(score > 1){
            display_message(guess > secretNumber ? '🙄 Too High!' : '🙄 Too Low!');
            score --;
            display_score(score);
        } else {
            display_message('😒 You lost!');
            display_score(0);
        }
    }
    
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    display_message('Start guessing...');
    display_score(score);
    display_number('?');
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    
});
