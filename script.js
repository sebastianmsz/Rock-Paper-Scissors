const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');

const userSelectionImg = document.querySelector('#userSelectionImg');
const computerSelectionImg = document.querySelector('#computerSelectionImg');

const winnerMessage = document.querySelector('#winnerMessage')
const winnerSelectionMessage =document.querySelector('#winnerSelectionMessage')

const userScoreText =document.querySelector('#userScoreText')
const computerScoreText = document.querySelector('#computerScoreText')

let computerScore = 0;
let userScore = 0;

rockBtn.addEventListener('click', () =>{
    game('rock');
});
paperBtn.addEventListener('click', () =>{
    game('paper');
});
scissorsBtn.addEventListener('click', () =>{
    game('scissors');
});

function setDefaultUi() {
    userScore = 0;
    computerScore = 0;
    ties = 0;
    userScoreText.textContent = userScore;
    computerScoreText.textContent = computerScore;
    winnerMessage.textContent = 'Choose your weapon';
    winnerSelectionMessage.textContent = 'First to score 5 points wins the game';
    userSelectionImg.src = `img/question.png`;
    computerSelectionImg.src = `img/question.png`;
}

function getComputerChoice () {
    let num = Math.floor(Math.random() * 3) + 1;
    switch (num) {
        case 1:

            return 'rock';    
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
}

function playRound (userChoice){
    let ComputerChoice = getComputerChoice();
    let winner='';

    userSelectionImg.src = `img/${userChoice}.png`;
    computerSelectionImg.src = `img/${ComputerChoice}.png`;

    if (userChoice == 'rock'){
        if (ComputerChoice == 'rock'){
            winnerMessage.textContent = 'Its a Tie';
            winnerSelectionMessage.textContent = 'Rock ties with Rock';
            winner = 'tie';
        } else if (ComputerChoice == 'paper'){
            winnerMessage.textContent = 'You lost!';
            winnerSelectionMessage.textContent = 'Paper beats Rock';
            winner = 'LosePaperRock';
            }else {
                winnerMessage.textContent = 'You Win!';
                winnerSelectionMessage.textContent = 'Rock beats Scissors';
                winner = 'WinRockScissors';}

    } else if (userChoice == 'paper'){
        if (ComputerChoice == 'paper'){
            winnerMessage.textContent = 'Its a Tie';
            winnerSelectionMessage.textContent = 'Paper ties with Paper';
            winner = 'tie';
        } else if (ComputerChoice == 'scissors'){
            winnerMessage.textContent = 'You lost!';
            winnerSelectionMessage.textContent = 'Scissors beats Paper';
            winner = 'LoseScissorsPaper';
        }else {
            winnerMessage.textContent = 'You Win!';
            winnerSelectionMessage.textContent = 'Paper beats Rock';
            winner = 'WinRockScissors';}

    } else if (userChoice == 'scissors'){
        if (ComputerChoice == 'scissors'){
            winnerMessage.textContent = 'Its a Tie';
            winnerSelectionMessage.textContent = 'Scissors ties with Scissors';
            winner = 'tie';
        } else if (ComputerChoice == 'rock'){
            winnerMessage.textContent = 'You lost!';
            winnerSelectionMessage.textContent = 'Rock beats Scissors';
            winner = 'LoseRockScissors';
        }else {
            winnerMessage.textContent = 'You Win!';
            winnerSelectionMessage.textContent = 'Scissors beats Paper';
            winner = 'WinRockScissors';}
    }
    return winner;
}

function game(userChoice) {
    let result = '';

    let winner = playRound(userChoice);
    switch (winner){
        case 'WinScissorsPaper':
            userScore += 1;
            userScoreText.textContent = userScore;
            break;
        case 'LosePaperRock':
            computerScore += 1;
            computerScoreText.textContent = computerScore;
            break;
        case 'WinRockScissors':
            userScore += 1;
            userScoreText.textContent = userScore;
            break;
        case 'LoseScissorsPaper':
            computerScore += 1;
            computerScoreText.textContent = computerScore;
            break;
        case 'WinPaperRock':
            userScore += 1;
            userScoreText.textContent = userScore;
            break;
        case 'LoseRockScissors':
            computerScore += 1;
            computerScoreText.textContent = computerScore;
            break;
        case 'tie':
            break;
    }

    if ( computerScore==5 | userScore==5){
        if (userScore>computerScore){
            result= (alert(`You Win!!`));
            userScore = 0;
            computerScore = 0;

        } else if (userScore<computerScore) {
            result= (alert(`You Lose!!`));
            userScore = 0;
            computerScore = 0;

        } else {result= (alert(`Its a Tie!!`));}
        setDefaultUi()
    }
}
