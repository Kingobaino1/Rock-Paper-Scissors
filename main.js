let options = ['rock', 'paper', 'scissors'];
let displays = document.querySelector('.display');
let btn1 = document.querySelector('.buttons');
let keys = document.querySelectorAll('button');
let displayCount = document.querySelector('.com-count');
let displayCounts = document.querySelector('.play-count');
let name = prompt('Enter your name to play')

let computerCount = 0;
let playerCount = 0;

function play(computerSelection, playerSelection){
    if(computerSelection === 'rock' && playerSelection === 'paper'|| computerSelection === 'paper' && playerSelection === 'scissors' || computerSelection === 'scissors' && playerSelection === 'rock'){
displays.textContent = `You win! Computer choose ${computerSelection}`
playerCount ++
    } else if(computerSelection === playerSelection){
        displays.textContent = `Tie! Computer choose ${computerSelection}`
    } else{
        displays.textContent = `You Loose! Computer choose ${computerSelection}`
        computerCount++
    }
}
function computerPlay(){
    let random = Math.floor(Math.random() * options.length);
    computerSelection = options[random];
}
function updateScore(){
    displayCount.textContent = `Player Count  ${playerCount}`
    displayCounts.textContent = `Computer Count  ${computerCount}`
}

function playRock(){
     computerPlay()
     play(computerSelection, 'rock');
     updateScore();  
     fiveRounds();
}

function playPaper(){
    computerPlay()
    play(computerSelection, 'paper');
    updateScore();
    fiveRounds();
}
function playScissors(){
    computerPlay();
    play(computerSelection, 'scissors');
    updateScore();
    fiveRounds();
}

function reset(){
    location.reload()
}
keys.forEach((item) => {
    if(item === keys[0]){
        item.addEventListener('click', playRock)
    } else if(item === keys[1]){
        item.addEventListener('click', playPaper)

    }  else if(item === keys[2]){
        item.addEventListener('click', playScissors)
    } else{
        item.addEventListener('click', reset)

    }

})
function fiveRounds(){
    if(playerCount + computerCount === 5){
        if(playerCount > computerCount){
            displays.textContent = `Congratulations ${name}! You win.`
            displays.style.cssText = 'color: green; font-size: 40px';
        }else if(playerCount < computerCount){
            displays.textContent = `Oooops! ${name} You lost to Computer.`
            displays.style.cssText = 'color: red; font-size: 40px';
        }
    } else if(playerCount + computerCount >= 5){
        location.reload();
    }
}
