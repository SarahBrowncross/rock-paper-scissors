

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




function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 0;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
        return 1;
    }
    else {
        return -1;
    }

}

let winCount = 0;
let gameCount = 5;

for (let i = 0; i < gameCount; i++) {
    let playerPlay = prompt("Choose rock, paper or scissors");
    playerPlay = playerPlay.toLowerCase();
    const computerSelection = computerPlay()
    let result = playRound(playerPlay, computerSelection);
    winCount = winCount + result;
    if (result === 0) {
        console.log("draw");
    }
    else if (result === 1) {
        console.log("win");
    }
    else if (result === -1) {
        console.log("lose");
    }
}

if (winCount === 0) {
    console.log("It's a draw");
}
else if (winCount > 0) {
    console.log("You win!");
}
else {
    console.log("You lose");
}




