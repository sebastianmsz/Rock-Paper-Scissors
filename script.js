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
            winner = 'Its a tie!';
        } else if (ComputerChoice == 'paper'){
            winner = 'You Lose! Paper beats Rock';
            }else {winner = 'You Win! Rock beats Scissors';}

    } else if (userChoice == 'paper'){
        if (ComputerChoice == 'paper'){
            winner = 'Its a tie!';
        } else if (ComputerChoice == 'scissors'){
            winner = 'You Lose! Scissors beats Paper';
        }else {winner = 'You Win! Paper beats Rock';}

    } else if (userChoice == 'scissors'){
        if (ComputerChoice == 'scissors'){
            winner = 'Its a tie!';
        } else if (ComputerChoice == 'rock'){
            winner = 'You Lose! Rock beats Scissors';
        } else {winner = 'You Win! Scissors beats PaperZ';}
    }
    return winner;
    }

//test
alert(playRound());