function getComputerChoice()
{
    let res = Math.floor(Math.random() * 3);

    return choices[res];
}

function getHumanChoice()
{
    let player = prompt("Choose rock, paper or scissors");

    return player;
}

function playRound(humanChoice , computerChoice, roundResult)
{
    if (humanChoice == computerChoice)
    {
        result.textContent = `It is a draw! you and the computer chose ${humanChoice}`;
        return "draw";
    }
    else if ((humanChoice == "rock" && computerChoice == "paper")
            || (humanChoice == "paper" && computerChoice == "scissors")
            || (humanChoice == "scissors" && computerChoice == "rock"))
    {
        roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        return "lose";
    }
    else
    {
        roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        return "win";
    }
}

function playGame(score, roundResult, gameResult, humanSelection)
{
    let computerSelection;

    computerSelection = getComputerChoice();
    humanSelection = humanSelection.toLowerCase();
    
    let res = playRound(humanSelection, computerSelection, roundResult);
    
    if (res == "win")
        humanScore++;
    else if (res == "lose")
        computerScore++;
    if (computerScore + humanScore >= 5)
    {
        if (humanScore > computerScore)
        {
            gameResult.textContent = "You won this game!";
        }
        else if (computerScore > humanScore)
        {
            gameResult.textContent = "You lost this game!";
        }
        computerScore = 0;
        humanScore = 0;
    }
    score.textContent = `human score: ${humanScore} compute score: ${computerScore}`;
}

const choices = ["rock", "paper", "scissors"];
let computerScore = 0, humanScore = 0;

const btns = document.querySelectorAll("button");
const score = document.getElementById("score");
const roundResult = document.getElementById("roundResult");
const gameResult = document.getElementById("gameResult");

btns.forEach(function(item) {
    item.addEventListener("click", () => playGame(score, roundResult, gameResult, item.getAttribute("id")))
});
