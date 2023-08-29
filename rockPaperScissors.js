// Computer chooses at random
function getComputerChoice() {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
} 

// Determines the winner of each round
function gameRound(playerSelection, computerSelection) {

    // Visualize user input vs computer choice
    console.log(`[U] ${playerSelection} vs ${computerSelection} [C]`);

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
    }
}

// Game
function game(e) {

    // User & comp choices
    let computerChoice = getComputerChoice();
    // playerChoice stores textContent of button clicked
    let playerChoice = e.target.textContent; 

    // Convert choices to lower case
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    
    let result = gameRound(playerChoice, computerChoice);

    if(userScore < 5 && compScore < 5) {
        if (result == "You win!") {
            userScore++;
            console.log(`\n\n${result}\n\n\nYour score: ${userScore}\nComputer score: ${compScore}`);
        } else if (result == "Computer wins") {
            compScore++;
            console.log(`\n\n${result}\n\n\nYour score: ${userScore}\nComputer score: ${compScore}`);
        } else {
            console.log(`\n\n${result}\n\n\nYour score: ${userScore}\nComputer score: ${compScore}`);
        }
    } else {
        if(userScore > compScore) {
            console.log(`"Game over!\nFinal Score\n[U]: ${userScore}\n[C]: ${compScore}"`);
            console.log("You beat the computer!");
        } else {
            console.log(`"Game over!\nFinal Score\n[U]: ${userScore}\n[C]: ${compScore}"`);
            console.log("Computer beats you!");
        }
        userScore = 0;
        compScore = 0;
        return;
    }
}

let userScore = 0;
let compScore = 0;

const choices = ["Rock", "Paper", "Scissors"];

// New code below using DOM manipulation

// Target button element
const buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {
    button.addEventListener("click", () => {
        console.log(button.textContent);
    })
    button.addEventListener("click", game);
});