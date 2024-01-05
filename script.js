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

//test
alert (`Computer:${getComputerChoice()} User:${getUserChoice()}`);

