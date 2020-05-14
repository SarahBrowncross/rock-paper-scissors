

function computerPlay() {
    let generator = Math.random() * 3;
    if (generator < 1) {
        return "rock";
    }
    else if (generator >= 1 && generator < 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

let playerPlay = prompt("Choose rock, paper or scissors");
playerPlay = playerPlay.toLowerCase();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "it's a draw";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
        return "You win!";
    }
    else {
        return "You lose"
    }

}

const computerSelection = computerPlay()
console.log(computerSelection);
console.log(playerPlay);
console.log(playRound(playerPlay, computerSelection));

