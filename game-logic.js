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

function playRound(humanChoice , computerChoice, resultAnnounce)
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
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        return "lose";
    }
    else
    {
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        return "win";
    }
}

function playGame(humanSelection)
{
    const resultAnnounce = document.getElementById("result")
    let computerSelection;

    computerSelection = getComputerChoice();
    humanSelection = humanSelection.toLowerCase();
    
    let res = playRound(humanSelection, computerSelection, resultAnnounce);
    
    if (res == "win")
        humanScore++;
    else if (res == "lose")
        computerScore++;
    if (computerScore + humanScore >= 5)
    {
        if (humanScore > computerScore)
        {
            resultAnnounce.textContent = "You won this game!";
        }
        else if (computerScore > humanScore)
        {
            resultAnnounce.textContent = "You lost this game!";
        }
        computerScore = 0;
        humanScore = 0;
    }
}

const choices = ["rock", "paper", "scissors"];
let computerScore = 0, humanScore = 0;

const btns = document.querySelectorAll("button");

btns.forEach(function(item) {
    item.addEventListener("click", () => playGame(item.getAttribute("id")))
});

// console.log(btns.getAttribute("id"));

// playGame();

// if (humanScore > computerScore)
//     console.log("You win!");
// else if (computerScore > humanScore)
//     console.log("You lose!");
// else
//     console.log("It is a draw!");4

