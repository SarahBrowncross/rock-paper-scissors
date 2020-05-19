
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

document.getElementById('rock').addEventListener('click', onButtonClick);

document.getElementById('paper').addEventListener('click', onButtonClick);

document.getElementById('scissors').addEventListener('click', onButtonClick);

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
    }
    else {
        computerScore++;
    }

}



function onButtonClick(event) {
    let playerSelection = event.target.id;
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    document.getElementById("result").textContent = "Your score is " + playerScore + ". Computer score is " + computerScore;
    if(playerScore >= 5) {
        document.getElementById("result").textContent = "You have won!";
    }
    if(computerScore >= 5) {
        document.getElementById("result").textContent = "You have lost";
    }
    }



    


