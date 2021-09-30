let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let rightPressed = false;
let leftPressed = false;
let downPressed = false;
let upPressed = false;

let playerHeight = 20;
let playerWidth = 20;
let playerX = (50);
let playerY = (250);
let playerRadius = 20;

function startGame() {
    obstacle 
}
function draw() {
    // clear the canvas
    ctx.clearRect(0,0, canvas.width, canvas.height);
    
    function drawPlayer() {
        ctx.beginPath();
        ctx.arc(playerX, playerY, playerRadius, 0, Math.PI*2);
        ctx.fillStyle = "pink"
        ctx.fill();
        ctx.closePath();
    }

    // draw player
    drawPlayer();

    drawPlayer();
 if(playerX >= canvas.width){
    playerX = 50;
    playerY = 250;
 }
    else if(playerX < -15){
    playerX = 50;
    playerY = 250;
    }
 

 if(playerY > canvas.height){
   playerY = 250;
   playerX = 50;
 }
    else if(playerY < -15){
     playerY = 250;
     playerX = 50;
    }
}
//player movement
document.addEventListener('keydown', function(event) {
    //left
    if(event.keyCode == 37) {
        playerX -= 20;
    }
    //top
    else if(event.keyCode == 38) {
        playerY -= 20;
    }
    //right
    else if(event.keyCode == 39) {
        playerX += 20;
    }
    //bottom
    else if(event.keyCode == 40) {
        playerY += 20;
    }
    });
    





    

setInterval(draw, 10);