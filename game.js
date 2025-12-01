let youscore = 0;
let compscore = 0;

const circles = document.querySelectorAll(".circle");
const msg = document.querySelector("p");
const userscorepara = document.querySelector(".youscore");
const compscorepara = document.querySelector(".compscore");

const genCompChoice = () =>{
    const options = ["rock","paper","scissor"];
    //rock ,paper, sscissors
    const ranidx = Math.floor(Math.random() * 3);
    return options[ranidx];
} 

const drawgame = ()=>{
    msg.innerText = " Game was draw! play again";
    msg.style.backgroundColor =" black";
    msg.style.width = "400px" ;
}

const showWinner = (userwin)=>{
    if(userwin){
        youscore++;
        userscorepara.innerText = youscore;
        console.log("you wins");
        msg.innerText = " You win!";
        msg.style.backgroundColor = " green";
    }else if(userwin==false){
        compscore++;
        compscorepara.innerText = compscore;
        console.log("you loose");
        msg.innerText = "You lose!";
        msg.style.backgroundColor ="red";
    }
}
const playGame = (userchoice) =>{
    // console.log(`user choice : ${userchoice}`);
    //generate comp choice
    const compchoice = genCompChoice();
    // console.log(`computer choice : ${compchoice}`);

    if(userchoice === compchoice){
        drawgame();
    }else{
        var userwin = true ;
        if (userchoice === "rock"){
            userwin = compchoice === "paper"? false : true
        }else if (userchoice === "paper"){
            userwin = compchoice === "scissor"? false : true;
        }else{
            userwin = compchoice === "rock" ? false : true;
        }
    }
    showWinner(userwin);
}


circles.forEach(circle => {
    // console.log(circles);
    circle.addEventListener("click",()=>{
       let userchoice = circle.getAttribute("id");
    //    console.log("circle is clicked",userchoice);
       playGame(userchoice);
    });
});
