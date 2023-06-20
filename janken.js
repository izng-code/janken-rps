const OPTIONS = Array("rock","paper","scissors");

function getComputerChoice() {
    return OPTIONS[Math.floor(Math.random() * OPTIONS.length)]
}

function getPlayerSelection() {
    return window.prompt("What will you choose? Rock, Paper or Scissors?").toLowerCase()
}

function playRound(playerSelection, computerSelection) {
    // checks for correct input
    if (OPTIONS.includes(playerSelection)) {
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
    else {
        console.log("Invalid Choice!");
        return;
    }
}
// initializes variables
let playerScore = 0;
let computerScore = 0;
let ties = 0;
function game() {
    // initializes selections
    const playerSelection = getPlayerSelection();
    const computerSelection = getComputerChoice();
    // plays a round and logs the result
    let round = playRound(playerSelection,computerSelection);
    console.log(round)
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
}
for (let i = 0; i < 5; i++) {
    game();
}
console.log(playerScore)
console.log(computerScore)
console.log(ties)
if (playerScore > computerScore) {
    console.log("You have won!");
}
else if (playerScore === computerScore) {
    console.log("It's a tie!");
}
else {
    console.log("You have lost!");
}
