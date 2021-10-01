let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let rightPressed = false;
let leftPressed = false;
let downPressed = false;
let upPressed = false;

let playerHeight = 20;
let playerWidth = 20;
let playerX = (250);
let playerY = (450);
let playerRadius = 20;

let score = 0;

let obstacleRowCount = 1;
let obstacleColumnCount = 5;
let obstacleWidth = 50;
let obstacleHeight = 20
let obstaclePadding = 10;
let obstacleOffsetTop = 5;
let obstacleOffsetLeft = 5;

let obstacle = [];
for (let c=0; c < obstacleColumnCount; c++) {
    obstacle[c] = [];
    for(let r=0; r < obstacleRowCount; r++) {
        obstacle[c][r] = {x: 0, y: 0};
    }
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

    //draw obstacle
    drawObstacle();

   function drawObstacle (){
      for(let c=0; c < obstacleColumnCount; c++) {
          for(let r=0; r < obstacleRowCount; r++){
              let obstacleX = (c*(obstacleWidth+obstaclePadding))+obstacleOffsetLeft;
              let obstacleY = (r*(obstacleHeight+obstaclePadding))+obstacleOffsetTop;
              obstacle[c][r].x = obstacleX;
              obstacle[c][r].y = obstacleY;
              ctx.beginPath();
              ctx.rect(obstacleX, obstacleY, obstacleWidth, obstacleHeight);
              ctx.fillStyle = "red";
              ctx.fill();
              ctx.closePath();
          }
      }
   }
    

    function drawScore() {
        ctx.font = "20px Times New Roman";
        ctx.fillStyle= "white"
        ctx.fillText("Score: " + score, 8, 20);
    }

    //draw the score
    drawScore(); 


 if(playerX >= canvas.width){
    playerX = 250;
    playerY = 450;
    
 }
    else if(playerX < -15){
    playerX = 250;
    playerY = 450;
    }
 

 if(playerY > canvas.height){
   playerY = 450;
   playerX = 250;
 }
    else if(playerY < -15){
     playerY = 450;
     playerX = 250;
     score ++;
     if(score == 10) {
        alert("You Win");
        document.location.reload();
        clearInterval(interval); //ends game
    }
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