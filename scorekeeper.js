
var p1button = document.querySelector("#p1");
var p2button = document.getElementById("p2");
var resetButton = document.getElementById("reset")
var p1Display= document.querySelector("#p1Display");
var p2Display= document.querySelector("#p2Display");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
var numInput = document.getElementById("inputNo");
var p = document.getElementById("winningscore")

p1button.addEventListener("click", function(){
    if(!gameOver){
    p1Score++;
        if(p1Score === winningScore){
            gameOver = true;
            p1Display.classList.add("winner");
        }
   p1Display.textContent= p1Score;
    }});

p2button.addEventListener("click", function(){
    if(!gameOver){
    p2Score++;
        if(p2Score === winningScore){
            gameOver = true;
            p2Display.classList.add("winner");
        }
   p2Display.textContent= p2Score;
    }});

resetButton.addEventListener("click", function(){
     p1Score = 0;
     p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
    });

numInput.addEventListener("change", function(){
    p.textContent = numInput.value;
    winningScore = Number(numInput.value);
})