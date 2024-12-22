
let plays = ['rock', 'paper', 'scissors']
let sign, humanScore = 0, computerScore = 0
let gCounter = 1

function getComputerChoice() {
    return plays[Math.floor(Math.random() * 3)]
}

function getHumanChoice() {

    while (sign != 'rock' && sign != 'paper' && sign != 'scissors') {
        sign = prompt("What's your play?");
        sign = sign.toLowerCase();
    }

    return sign
}

function playRound(humanChoice, computerChoice) {

    console.log(humanChoice + ' vs ' + computerChoice)

    if ((humanChoice == 'rock' && computerChoice == 'paper') ||
        (humanChoice == 'paper' && computerChoice == 'scissors') ||
        (humanChoice == 'scissors' && computerChoice == 'rock')
    ) {
        computerScore++
    } else if ((humanChoice == 'rock' && computerChoice == 'scissors') ||
        (humanChoice == 'paper' && computerChoice == 'rock') ||
        (humanChoice == 'scissors' && computerChoice == 'paper')
    ) {
        humanScore++
    } else if(humanChoice == computerChoice){
        console.log('Draw')
    }

}

for (gCounter = 1; gCounter <= 5; gCounter++) {

    console.log('Round #' + gCounter)
    
    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()
    playRound(humanChoice,computerChoice)

    console.log('HumanScore: ' + humanScore + '\n' + 'ComputerScore: ' + computerScore)
    sign = null

    if (gCounter == 5) {
        if(humanScore>computerScore){
            console.log('The player wins')
        }else{
            console.log('The computer wins')
        }
    }
}





