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

function play(event){
    if(event){
        document.getElementById("resetButton").style.display="block";
        computerChoice= getComputerChoice();
        console.log(computerChoice);
        
        console.log("Event id is: " + event.target.id)

        console.log("Elements are " + computerChoice, event.target.id + compare(computerChoice, event.target.id));
        render(computerChoice, event.target.id, compare(computerChoice, event.target.id));
    }

}

function render(computerChoice, playerCh, msgR){
    if(computerChoice != undefined){
    resultDisplayEl.textContent = `Computer chose: ${computerChoice} and you choose ${playerCh} and ${msgR}`;
    } else {
        resultDisplayEl.textContent = 'Game is reset.';
    }
}

function compare(computerCh, playerCh){
    if(computerCh=='scissors'){
        if (playerCh=='rock'){
            return "Player Won.";
        } else if (playerCh=='paper'){
            return "Computer Won."
        }  else {
        return "It's a draw.";
        
        }
        
    } else if (computerCh=='rock'){
        if (playerCh=='paper') {
            return "Player Won.";
        } else if (playerCh=='scissors'){
            return "Computer Won."
        }  else {
        return "It's a draw.";
        }
    } else if (computerCh=='paper'){
        if (playerCh=='scissors') {
            return "Player Won.";
        } else if (playerCh=='rock') {
            return "Computer Won."
        } else {
        return "It's a draw."
    } 
    }
}

const resetGame = () => {
  playerChoice = null;
  computerChoice = null;
  msg = '';  // also clear any displayed messages or game outcomes on the page.
  render();
}
/*----------------------------- Event Listeners -----------------------------*/

rockBtnEl.addEventListener('click', play); //automatically passes event function if possible
paperBtnEl.addEventListener('click', play);
scissorsBtnEl.addEventListener('click', play);

document.querySelector('#resetButton').addEventListener('click', resetGame);
