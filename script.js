let result = document.getElementById("result");

let playerScore = 0;
let computerScore = 0;

let scoreDisplay = document.getElementById("score");


document.getElementById("rock").addEventListener("click", function() {
    playGame("three");
});

document.getElementById("paper").addEventListener("click", function() {
    playGame("midrange");
});

document.getElementById("scissors").addEventListener("click", function() {
    playGame("layup");
});


function playGame(playerChoice) {

    let computerChoice = getComputerChoice();


    // BLOCKED
    if (playerChoice === computerChoice) {

        computerScore++;

        result.textContent =
            "You chose " + playerChoice +
            ". Computer chose " + computerChoice +
            ". You got blocked! 🏀";

    }


    // PLAYER SCORES
    else if (
        (playerChoice === "three" && computerChoice === "layup") ||
        (playerChoice === "layup" && computerChoice === "midrange") ||
        (playerChoice === "midrange" && computerChoice === "three")
    ) {

        playerScore++;

        result.textContent =
            "You chose " + playerChoice +
            ". Computer chose " + computerChoice +
            ". You scored! 🎉";
    }


    // COMPUTER SCORES
    else {

        computerScore++;

        result.textContent =
            "You chose " + playerChoice +
            ". Computer chose " + computerChoice +
            ". You missed! 😭";
    }


    // UPDATE SCORE ON SCREEN
    scoreDisplay.textContent =
        "You: " + playerScore +
        " | Computer: " + computerScore;
}


function getComputerChoice() {

    let choices = ["three", "midrange", "layup"];

    let randomIndex =
        Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}
