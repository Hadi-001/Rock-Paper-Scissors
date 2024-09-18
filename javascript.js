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
    }
    else if((ComputerChoice == 'rock' && HumanChoice == 'scissors') || (ComputerChoice == 'scissors' && HumanChoice == 'paper') || (ComputerChoice == "paper" && HumanChoice == "rock")){
        ++computerScore;
    }
}


let new_game = document.querySelector(".Newgame");
let computer_result = document.querySelector(".computer-result");
let human_result = document.querySelector(".human-result");

let human_chose_rock = document.querySelector(".rock-btn");
let human_chose_paper = document.querySelector(".paper-btn");
let human_chose_scissors = document.querySelector(".scissors-btn");

let human_img = document.querySelector("#human-img");
let computer_img = document.querySelector("#computer-img")

let display_round_winner = document.querySelector(".display-round-winner");

human_chose_paper.addEventListener("click",()=>{
    playGame("paper");
})
human_chose_rock.addEventListener("click",()=>{
    playGame("rock");
})
human_chose_scissors.addEventListener("click",()=>{
    playGame("scissors");
})

function playGame(human_choice){
    if(computerScore >= 5 || humanScore >= 5)reset();
    let ComputerChoice = getComputerChoice();
    let HumanChoice = human_choice;
    let previous_computer_score = computerScore;

    human_img.src = "images/" + HumanChoice +".png";
    playRound(HumanChoice,ComputerChoice);
    computer_img.src = "images/" + ComputerChoice + ".png";
    if(ComputerChoice == HumanChoice)display_round_winner.textContent = "No winner this round";
    else if(previous_computer_score < computerScore){
        display_round_winner.textContent = "Computer won this round!";
        computer_result.textContent = computerScore;
        
    }
    else {
        display_round_winner.textContent ="Congrats you won this round!!";
        human_result.textContent = humanScore;
    }
    if(humanScore == 5)display_round_winner.textContent = "WAHSHH!!";
    if(computerScore == 5)display_round_winner.textContent = "YOU LOSE :(";
}

function reset(){
    humanScore = 0;
    computerScore = 0;
    computer_result.textContent = 0;
    human_result.textContent = 0;
    human_img.src = "images/question-mark.png";
    computer_img.src = "images/question-mark.png";
    display_round_winner.textContent = "Enter your choice";
}

new_game.addEventListener('click',reset);


//playGame();
