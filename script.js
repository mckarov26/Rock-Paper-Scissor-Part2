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
});


