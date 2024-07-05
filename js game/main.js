const choices = ["rock", "paper", "scissors"];

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerchoices){
    const  computerChoices = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerchoices === computerChoices){
        result = "IT'S A TIE";
    }
    else{
        switch(playerchoices){

            case "rock":
            result = (computerChoices === "scissors") ? "!!YOU WIN!!" : "??YOU LOSE??";
            break;

            case "paper":
            result = (computerChoices === "rock") ? "!!YOU WIN!!" : "??YOU LOSE??";
            break;

            case "scissors":
            result = (computerChoices === "paper") ? "!!YOU WIN!!" : "??YOU LOSE??";
            break;

        }
    }

    playerDisplay.textContent = `PLAYER: ${playerchoices}`;
    computerDisplay.textContent = `Computer: ${computerChoices}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result){

        case "!!YOU WIN!!":

            resultDisplay.classList.add("greenText");
            playerScore ++;
            playerScoreDisplay.textContent = playerScore;
            break;

            case "??YOU LOSE??":
            resultDisplay.classList.add("redText");
            computerScore ++;
            computerScoreDisplay.textContent = computerScore;
            break;

    }


}
