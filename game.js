function getComputerChoice() {
    const items = ["rock", "paper", "scissors"];
    let item = items[Math.floor(Math.random()*items.length)];
    return item;
}

function getPlayerChoice(playerSelection) {
    return playerSelection;
}

function playRound(playerSelection) {

    computerSelection = getComputerChoice();

    if (playerSelection == "rock"){

        if (computerSelection == "rock")
        {
            document.getElementById("result").innerHTML = "Draw!.";
        }
        else if (computerSelection == "paper")
        {
            document.getElementById("result").innerHTML = "Computer Wins!. Paper beats rock.";
        }
        else {
            document.getElementById("result").innerHTML = "You win!. Rock beats scissors.";
        }

    }

    else if (playerSelection == "paper") {

        if (computerSelection == "rock")
        {
            document.getElementById("result").innerHTML = "You win!. Paper beats rock!.";
        }
        else if (computerSelection == "paper")
        {
            document.getElementById("result").innerHTML = "Draw!.";
        }
        else {
            document.getElementById("result").innerHTML = "Computer wins!. Scissors beat paper!.";
        }

    }
    else {

        if (computerSelection == "rock")
        {
            document.getElementById("result").innerHTML = "Computer wins!. Rock beats scissors.";
        }
        else if (computerSelection == "paper")
        {
            document.getElementById("result").innerHTML = "You win!. Scissors beat paper!.";
        }
        else {
            document.getElementById("result").innerHTML = "Draw!.";
        }

    }
}



// function game() {
//     for (let i=0; i<5; i++){
//         let playerSelection = getPlayerChoice();
//         let computerSelection = getComputerChoice();
//         console.log(i);
//         console.log(playRound(playerSelection, computerSelection));
//     }
// }