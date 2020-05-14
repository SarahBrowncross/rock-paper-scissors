

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

console.log(computerPlay());


