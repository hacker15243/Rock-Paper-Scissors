let userScore = 0;
let computerScore = 0;

// these are dom variables
//basically we are storing all of these in variables so we can use them later 
//(beecause it is difficult to type all of this out.)
//explain this in slide - note
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    return (choices[Math.floor(Math.random() * 3)]);
}

function convert(choice){
    if(choice === "p"){
        return "paper";
    }else if (choice === "r") {
        return "rock";
    } else {
        return "scissors";
    }
}


function win(userChoice, computerChoice){
    let uc = convert(userChoice);
    let cc = convert(computerChoice);
    userScore++;
    result_p.innerHTML = uc + " beats " + cc + "." + " You win!";
    userScore_span.innerHTML = userScore;
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(function() { document.getElementById(userChoice).classList.remove("green-glow") }, 500);
}

function loose(userChoice, computerChoice){
    let uc = convert(userChoice);
    let cc = convert(computerChoice);
    computerScore++;
    result_p.innerHTML = uc + " looses to " + cc + ". You loose!";
    computerScore_span.innerHTML = computerScore;
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(function() { document.getElementById(userChoice).classList.remove("red-glow") }, 500);
}

function draw(userChoice,cc){
    result_p.innerHTML = "IT IS A DRAW!";
    document.getElementById(userChoice).classList.add("grey-glow");
    setTimeout(function() { document.getElementById(userChoice).classList.remove("grey-glow") }, 500);
}

function game(userChoice){
    const cChoice = getComputerChoice();
    // console.log("got here");
    if(userChoice === "r"){
        if(cChoice === "p"){
            loose("r", "p");
        }else if (cChoice === "s") {
            win("r", "s");
        } else {
            draw("r", "r");
        }
    }else if (userChoice === "p"){
        if(cChoice === "p"){
            draw("p", "p");
        }else if (cChoice === "r") {
            win("p", "r");
        } else {
            loose("p", "s");
        }
    }else{ // userchoice = s
        if(cChoice === "p"){
            win("s", "p");
        }else if (cChoice === "r") {
            loose("s", "r");
        } else {
            draw("s", "s");
        }
    }
    // console.log(userScore + " : " + computerScore);
}

function main(){
    rock_div.addEventListener('click',function(){
        game("r");
    })


    paper_div.addEventListener('click',function(){
        game("p");
    })


    scissors_div.addEventListener('click',function(){
        game("s");
    })
}


main();
