function getComputerChoice(){
    let range = Math.random();
    if(range >= 0 && range <= 0.33)return "rock";
    else if(range > 0.33 && range <= 0.66)return "paper";
    return "scissors";
}

function getHumanChoice(){
    let user_choice = prompt("Enter your choice (rock ,paper, scissors): ");
    user_choice = user_choice.toLowerCase();
    while(user_choice != "rock" && user_choice != "scissors" && user_choice != "paper"){
        user_choice = prompt(`You entered ${user_choice} which is not valid please choose from the following (rock ,paper, scissors): `);
        user_choice = user_choice.toLowerCase();
    }
    return user_choice;
}

let humanScore = 0,computerScore = 0;

function playRound(HumanChoice,ComputerChoice){
    if((HumanChoice == 'rock' && ComputerChoice == 'scissors') || (HumanChoice == 'scissors' && ComputerChoice == 'paper') || (HumanChoice == "paper" && ComputerChoice == "rock")){
        ++humanScore;
        console.log(`You win ${HumanChoice} beats ${ComputerChoice} well done!!`);
        console.log(`Your score is ${humanScore} while computer's score is ${computerScore}`);
    }
    else if((ComputerChoice == 'rock' && HumanChoice == 'scissors') || (ComputerChoice == 'scissors' && HumanChoice == 'paper') || (ComputerChoice == "paper" && HumanChoice == "rock")){
        ++computerScore;
        console.log(`You lost ${ComputerChoice} beats ${HumanChoice} better luck next time!!`);
        console.log(`Your score is ${humanScore} while computer's score is ${computerScore}`);
    }
}
function playGame(){
    humanScore = 0,computerScore = 0;
    let i = 0;
    while(i < 5){
        let previous_human_score = humanScore,previous_computer_score = computerScore;
        playRound(getHumanChoice(),getComputerChoice());
        if(previous_computer_score != computerScore || previous_human_score != humanScore){
            ++i;
        }
    }
}

playGame();
