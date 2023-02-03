"use strict"

const hiddenNumberBox = document.querySelector('.hnb');
const scoreValue = document.querySelector('.score_value');
const result = document.querySelector('.result');
const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.checkbtn');
const userInput = document.querySelector('.input');
const coveringBox = document.querySelector('.covering-box');
const guessingText = document.querySelector('.guessing-text');
const guessingDot = document.querySelector('.guessing');
const highScoreValue = document.querySelector('.highscore_value');

const initialScore = 20;
let count = 0;
scoreValue.textContent = 20;
highScoreValue.textContent =0;
let hiddenNumber = Math.trunc(Math.random()*20+1);
// hiddenNumberBox.textContent = hiddenNumber;
console.log(hiddenNumber)
console.log(userInput.value)

function checkFnc(){
    if(hiddenNumber == userInput.value){
        coveringBox.classList.add('animation');
        hiddenNumberBox.textContent = hiddenNumber;
        setTimeout(()=>{
    coveringBox.style.opacity = '0';
    guessingText.textContent = 'Awesome!!!';
    guessingText.classList.add('result-text');
    guessingDot.classList.add('hidden-dot');
},700);
if(scoreValue.textContent>highScoreValue.textContent){
    highScoreValue.textContent = scoreValue.textContent;
}else{
    scoreValue.textContent = 0;
}

    }else{
        count+=1;
        scoreValue.textContent = initialScore-count;
        coveringBox.style.borderColor = "red";
        coveringBox.style.color = "red";
        setTimeout(()=>{
            coveringBox.style.borderColor = "black";  
            coveringBox.style.color = "black";  
        },500)
    }
}


checkBtn.addEventListener('click',checkFnc);
againBtn.addEventListener('click',resetfunc);

function resetfunc(){
    scoreValue.textContent = 20;
    count = 0
    scoreValue.textContent = 0;
    coveringBox.style.backgroundColor = 'white';
    coveringBox.classList.remove('animation');
    guessingText.textContent = 'Start Guessing';
    guessingText.classList.remove('result-text');
    guessingDot.classList.remove('hidden-dot');
    coveringBox.style.opacity = '1';
    hiddenNumber = Math.trunc(Math.random()*20+1);
    console.log(hiddenNumber)

}