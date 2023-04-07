function getComputerChoice() {
    const items = ["rock", "paper", "scissors"];
    let item = items[Math.floor(Math.random()*items.length)];
    return item;
}

function getPlayerChoice() {
    let item = prompt("Please pick : rock, paper, or scissors");
    return item.toLowerCase() ;
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock"){
        if (computerSelection == "rock")
        {
            return "Draw!.";
        }
        else if (computerSelection == "paper")
        {
            return "Computer Wins!. Paper beats rock.";
        }
        else {
            return "You win!. Rock beats scissors.";
        }
    }

    else if (playerSelection == "paper") {
        if (computerSelection == "rock")
        {
            return "You win!. Paper beats rock!.";
        }
        else if (computerSelection == "paper")
        {
            return "Draw!.";
        }
        else {
            return "Computer wins!. Scissors beat paper!.";
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "rock")
        {
            return "Computer wins!. Rock beats scissors.";
        }
        else if (computerSelection == "paper")
        {
            return "You win!. Scissors beat paper!.";
        }
        else {
            return "Draw!.";
        }
    }
    else {
        return "Please enter a valid selection!.";
    }
}

function game() {
    for (let i=0; i<5; i++){
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        console.log(i);
        console.log(playRound(playerSelection, computerSelection));
    }
}