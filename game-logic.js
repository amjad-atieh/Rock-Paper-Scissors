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

function playRound(humanChoice , computerChoice)
{
    if (humanChoice == computerChoice)
    {
        console.log(`It is a draw! you and the computer chose ${humanChoice}`)
        return "draw";
    }
    else if ((humanChoice == "rock" && computerChoice == "paper")
            || (humanChoice == "paper" && computerChoice == "scissors")
            || (humanChoice == "scissors" && computerChoice == "rock"))
    {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        return "lose";
    }
    else
    {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        return "win";
    }
}

function playGame()
{
    let humanSelection;
    let computerSelection;

    for (let i = 0; i < 5; i++)
    {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        humanSelection = humanSelection.toLowerCase();
    
        let res = playRound(humanSelection, computerSelection);
    
        if (res == "win")
            humanScore++;
        else if (res == "lose")
            computerScore++;
    }
}

const choices = ["rock", "paper", "scissors"];
let computerScore = 0, humanScore = 0;

playGame();

if (humanScore > computerScore)
    console.log("You win!");
else if (computerScore > humanScore)
    console.log("You lose!");
else
    console.log("It is a draw!");