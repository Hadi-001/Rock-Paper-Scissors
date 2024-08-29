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

