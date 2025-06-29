/*-------------------------------- Constants --------------------------------*/

const choices = ['rock', 'paper', 'scissors'];


/*-------------------------------- Variables --------------------------------*/


let playerChoice;
let computerChoice; 
let msg;

/*------------------------ Cached Element References ------------------------*/

const resultDisplayEl = document.querySelector('#result-display');

const rockBtnEl = document.querySelector('#rock');
const paperBtnEl = document.querySelector('#paper');
const scissorsBtnEl = document.querySelector('#scissors');


/*-------------------------------- Functions --------------------------------*/

function getComputerChoice(){
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function play(){
    computerChoice= getComputerChoice();
    console.log(computerChoice);
    
    render();
}

function render(){

}


/*----------------------------- Event Listeners -----------------------------*/

document.querySelector('#rock').addEventListener('click', play);
document.querySelector('#paper').addEventListener('click', play);
document.querySelector('#scissors').addEventListener('click', play);

play();