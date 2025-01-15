const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const playerChoice = document.querySelector("#playerChoice");
const computerChoice = document.querySelector("#computerChoice");
const winnerDisplay = document.querySelector("#winnerDisplay");

const displayRound = document.querySelector("#displayRound");

let computerNum = 0;
let playerNum = 0;
let currentRound = 0;
// I might not use this anymore insted use the Javascript Event Delegation 
// const rock = document.querySelector("#rock")
// const paper = document.querySelector("#paper")
// const scissor = document.querySelector("#scissor")


const buttonContainer = document.querySelector(".btn-container");

//Javascript Event Delegation 
// Assign a single event handler to handle all the click events:
// This is a callback function to display player choice when button is clicked!

buttonContainer.addEventListener("click", (event) => {
 
    currentRound++;
    displayRound.textContent = `Round ${currentRound}`;
    

    let target = event.target;

    switch(target.id) {
        case "rock":
            playerChoice.style.padding = "0";
            playerChoice.style["font-size"] = "40px";
            playerChoice.textContent = "✊";
            
            break;
        case "paper":
            playerChoice.style.padding = "0";
            playerChoice.style["font-size"] = "40px";
            playerChoice.textContent = "🫱";
            break;
        case "scissor": 
            playerChoice.style.padding = "0";
            playerChoice.style["font-size"] = "40px";
            playerChoice.textContent = "✌️";
            break;
    }

    // This will invoke the getComputerChoice after the buttons is clicked
    getComputerChoice();

    // This will invoke the getWinner Function after the buttons is clicked
    getWinner();
    playerScore.textContent = `Player Score: ${playerNum}`;
    computerScore.textContent = `Computer Score: ${computerNum}`;

   
    // This code will disable the buttons and display the champion!
    if (currentRound === 5) {
        disableButtons()
        if (playerNum < computerNum) {
            winnerDisplay.textContent = "Computer is the Champion!";
        } else if (playerNum > computerNum) {
            winnerDisplay.textContent = "Player is the Champion!";
        }
    }


});

// This is a function to get the Computer Choice and display its result in random value.

function getComputerChoice() {
    let num = Math.floor((Math.random() * 3) + 1);

    switch(num) {
        case 1:
            computerChoice.style.padding = "0";
            computerChoice.style["font-size"] = "40px";
            computerChoice.textContent = "✊";
            break;
        case 2:
            computerChoice.style.padding = "0";
            computerChoice.style["font-size"] = "40px";
            computerChoice.textContent = "🫱";
            break;
        case 3:
            computerChoice.style.padding = "0";
            computerChoice.style["font-size"] = "40px";
            computerChoice.textContent = "✌️";
            break;
    }


}



// This function is to compare the choices between the player and the computer.

function getWinner() {

    
    if (playerChoice.textContent === "✊" && computerChoice.textContent === "✊" 
        || playerChoice.textContent === "🫱" && computerChoice.textContent === "🫱" 
        || playerChoice.textContent === "✌️" && computerChoice.textContent === "✌️" 
        ) {    winnerDisplay.textContent = "It's a tie!"
            //    playerNum++;
            //    computerNum++;

     } else if (playerChoice.textContent === "✊" && computerChoice.textContent === "✌️" ) {
        winnerDisplay.textContent = "Player Wins!";
        playerNum++;

     } else if (playerChoice.textContent === "✊" && computerChoice.textContent === "🫱") {
        winnerDisplay.textContent = "Computer Wins!";
        computerNum++;

     } else if (playerChoice.textContent === "🫱" && computerChoice.textContent === "✊") {
        winnerDisplay.textContent = "Player Wins!";
        playerNum++;        

     } else if (playerChoice.textContent === "🫱" && computerChoice.textContent === "✌️") {
        winnerDisplay.textContent = "Computer Wins!";
        computerNum++;

     } else if (playerChoice.textContent === "✌️" && computerChoice.textContent === "🫱") {
        winnerDisplay.textContent = "Player Wins!";
        playerNum++;   

     } else if (playerChoice.textContent === "✌️" && computerChoice.textContent === "✊") {
        winnerDisplay.textContent ="Computer Wins!";
        computerNum++;
     }             

}

//Function this will disable button.
function disableButtons() {
    const buttons = buttonContainer.querySelectorAll("button");

    buttons.forEach(button => {
        button.disabled = true;
    })
}