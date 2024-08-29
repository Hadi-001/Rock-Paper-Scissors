function getComputerChoice(){
    let range = Math.random();
    if(range >= 0 && range <= 0.33)return "rock";
    else if(range > 0.33 && range <= 0.66)return "paper";
    return "scissors";
}

console.log(getComputerChoice());