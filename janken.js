const OPTIONS = Array("rock","paper","scissors");
// defines necessary functions
function getComputerChoice() {
    return OPTIONS[Math.floor(Math.random() * OPTIONS.length)]
}
function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        return "It's a tie!";
    }
    else {
        switch  (playerSelection) {
        case "rock":
            return (computerSelection === "scissors" ?  "You have won! Rock beats Scissors." : "You have lost, Paper beats Rock.");
        case "paper":
            return (computerSelection === "rock" ? "You have won! Paper beats Rock." : "You have lost, Scissors beat Paper.");
        case "scissors":
            return (computerSelection === "paper" ? "You have won! Scissors beat Paper." : "You have lost, Rock beats Scissors.");
        }
    }
}
// initializes variables
let playerScore = 0;
let computerScore = 0;
let ties = 0;
let playerScoreHTML = document.getElementById("score-user");
let computerScoreHTML = document.getElementById("score-com");
let resultHTML = document.getElementById("result");

function playGameTo5() {    
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (playerScore < 5 && computerScore < 5) {
                let round = playRound(button.id, getComputerChoice());
                // updates score by string matching
                if (round.includes("You have won!")) {
                    playerScore++;
                }
                else if (round.includes("It's a tie!")) {
                    ties++
                }
                else {
                    computerScore++;
                }   
                // inserts HTML content
                playerScoreHTML.innerText = playerScore;
                computerScoreHTML.innerText = computerScore;
                resultHTML.innerText = round;
                if (playerScoreHTML.innerText === "5") {
                    let div = document.createElement("div");
                    div.innerText = "The game is over! You have won!";
                    document.querySelector("body").appendChild(div);
                    return;
                }
                else if (computerScoreHTML.innerText === "5") {
                    let div = document.createElement("div");
                    div.innerText = "The game is over! The computer has won!"
                    document.querySelector("body").appendChild(div);
                    return;
                }
            };
        });
    });      
};
playGameTo5();