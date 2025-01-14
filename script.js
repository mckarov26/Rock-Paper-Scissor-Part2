const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const playerChoice = document.querySelector("#playerChoice");
const computerChoice = document.querySelector("#computerChoice");
const winnerDisplay = document.querySelector("#winnerDisplay");


// I might not use this anymore insted use the Javascript Event Delegation 
// const rock = document.querySelector("#rock")
// const paper = document.querySelector("#paper")
// const scissor = document.querySelector("#scissor")


const buttonContainer = document.querySelector(".btn-container");

//Javascript Event Delegation 
// Assign a single event handler to handle all the click events:
// This is a callback function to display player choice when button is clicked!

buttonContainer.addEventListener("click", (event) => {
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


    getComputerChoice();

    
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