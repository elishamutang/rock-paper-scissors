// getComputerChoice is working
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
} 

console.log(getComputerChoice());

function gameRound(playerSelection, computerSelection) {
    playerSelection = prompt("Rock, paper or Scissors?");
    computerSelection = getComputerChoice();

    // Convert inputs to lowercase to compare
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // Display both selection
    console.log(`You: ${playerSelection} \nComputer: ${computerSelection}`);

    if (playerSelection == computerSelection) {
        return "It's a Tie!";
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return "Computer wins";
        } else if (computerSelection == "scissors") {
            return "You win!";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You win!";
        } else if (computerSelection == "scissors") {
            return "Computer wins";
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return "Computer wins";
        } else if (computerSelection == "paper") {
            return "You win!";
        }
    } else {
        return "Invalid entry";
    }

}

console.log(gameRound());