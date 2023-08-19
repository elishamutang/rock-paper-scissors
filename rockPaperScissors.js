// getComputerChoice is working
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
} 

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
    } else {
        return "Invalid entry";
    }

}

function game() {

    let userScore = 0;
    let compScore = 0;
    let playerChoice = prompt("Rock, paper or scissors?");
    let computerChoice;

    // Convert inputs to lowercase to in order to compare (i.e case-insensitive)
    playerChoice = playerChoice.toLowerCase();

    // Validates user input at the start
    if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {

        alert("Round starts now! Please re-enter your first choice");

        // Keeps track of each round
        for(round = 1; round < 6; round++) {
            playerChoice = prompt("Rock, paper or scissors?");
            computerChoice = getComputerChoice();

            playerChoice = playerChoice.toLowerCase();
            computerChoice = computerChoice.toLowerCase();


            if (result == "You win!") {
                userScore++;
                console.log(`\n\n${result}\n\n\nRound:${round}Your score: ${userScore}\nComputer score: ${compScore}`);
            } else if (result == "Computer wins") {
                compScore++;
                console.log(`\n\n${result}\n\n\nRound:${round}Your score: ${userScore}\nComputer score: ${compScore}`);
            } else if (result == "It's a Tie!") {
                console.log(`\n\n${result}\n\n\nRound:${round}Your score: ${userScore}\nComputer score: ${compScore}`);
            }
        }

        // Announces the winner after game ends
        if(userScore > compScore) {
            return "Game over: You beat the computer!";
        } else if(compScore > userScore) {
            return "Game over: Computer beats you!";
        } else {
            return "Game over: It's a tie! No one wins!";
        }
    }

    // User to re-enter correct choices based on initial instructions
    else {
        console.log(`You entered ${playerChoice}. Please try again.`);
        console.log(game());
    }
}

console.log(game());