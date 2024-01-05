function getComputerChoice () {
    let num = Math.floor(Math.random() * 3) + 1;
    switch (num) {
        case 1:
            return 'rock';    
        case 2:
            return 'raper';
        case 3:
            return 'scissors';
    }
}

function getUserChoice () {
    let userChoice = prompt('Choose rock, paper or scissors');
    userChoice = String(userChoice);
    userChoice = userChoice.toLowerCase();
    while (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors') {
        alert('Thats not a valid option');
        userChoice = prompt('Choose rock, paper or scissors');
    }
    return userChoice;
}

function playRound (){
    let userChoice = getUserChoice();
    let ComputerChoice = getComputerChoice();
    let winner='';

    if (userChoice == 'rock'){
        if (ComputerChoice == 'rock'){
            winner = 'tie';
        } else if (ComputerChoice == 'paper'){
            winner = 'LosePaperRock';
            }else {winner = 'WinRockScissors';}

    } else if (userChoice == 'paper'){
        if (ComputerChoice == 'paper'){
            winner = 'tie';
        } else if (ComputerChoice == 'scissors'){
            winner = 'LoseScissorsPaper';
        }else {winner = 'WinPaperRock';}

    } else if (userChoice == 'scissors'){
        if (ComputerChoice == 'scissors'){
            winner = 'tie';
        } else if (ComputerChoice == 'rock'){
            winner = 'LoseRockScissors';
        } else {winner = 'WinScissorsPaper';}
    }
    return winner;
    }

function game() {
    let computerScore = 0;
    let userScore = 0;
    for (let i = 1 ; i <= 5 ; i++){
        let winner = playRound();
        switch (winner){
            case 'LosePaperRock':
                alert('You lose! Paper beats Rock');
                computerScore += 1;
                break;
            case 'WinRockScissors':
                alert('You Win! Rock beats Scissors');
                userScore += 1;
                break;
            case 'LoseScissorsPaper':
                alert('You lose! Scissors beats Paper');
                computerScore += 1;
                break;
            case 'WinPaperRock':
                alert('You Win! Paper beats Rock');
                userScore += 1;
                break;
            case 'LoseRockScissors':
                alert('You lose! Paper beats Rock');
                computerScore += 1;
                break;
            case 'WinScissorsPaper':
                alert('You Win! Scissors beats Paper');
                userScore += 1;
                break;
            case 'tie':
                alert('Its a Tie!');
                break;
        }
    }

    if (userScore>computerScore){
        let result= (alert(`You Win!! The score is You=${userScore}  The Computer=${computerScore}`));
    } else if (userScore<computerScore) {
        let result= (alert(`You Lose!! The score is You=${userScore} The Computer=${computerScore}`));
        } else {let result= (alert(`Its a tie!! The score is You=${userScore} The Computer=${computerScore}`));
    }
    return(alert(result));
    }

alert(game());