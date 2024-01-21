const buttonsE1 = document.querySelectorAll("button");
const textE1 = document.getElementById("text-win");
const playerE1 = document.getElementById("user-score");
const computerE1 = document.getElementById("computer-score");

// console.log(computerChoice)

let computerScore = 0;
let playerScore = 0;
function gamePlay(){
    buttonsE1.forEach(function(button){
        button.addEventListener("click", ()=>{
            let buttonID = button.id;
            console.log(buttonID)
            
            const computer = ["rock", "paper", "scissors"];
            const int = Math.floor(Math.random()*computer.length );
            const computerChoice = computer[int];
            console.log(computerChoice)
            
            if(computerChoice === buttonID){
                textE1.innerHTML="It is Tie Game!"
            }else if(computerChoice === "rock" && buttonID ==="scissors" || computerChoice === "scissors" && buttonID === "paper" || computerChoice === "paper" && buttonID === "rock"){
                computerScore++;
                computerE1.textContent = computerScore
                textE1.innerHTML="Computer Wins!"
            }else{
                playerScore++;
                playerE1.textContent=playerScore;
                textE1.innerHTML="You Wins!"
            }
        })
    })
    
}
gamePlay()
