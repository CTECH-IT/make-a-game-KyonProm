let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let rightPressed = false;
let leftPressed = false;
let downPressed = false;
let upPressed = false;

let playerHeight = 20;
let playerWidth = 20;
let playerX = (250);
let playerY = (250);
let playerRadius = 20;

let dx = 10;
let dy = -10;

function draw() {
    // clear the canvas
    ctx.clearRect(0,0, canvas.width, canvas.height);
    
    function drawPlayer() {
        ctx.beginPath();
        ctx.arc(playerX, playerY, playerRadius, 0, Math.PI*2);
        ctx.fillStyle = "blue"
        ctx.fill();
        ctx.closePath();
    }

    // draw player
    drawPlayer();

    // player movement x value
    if(rightPressed) {
        playerX += 7;
    }
    else if(leftPressed) {
        playerX -= 7;
    }

    drawPlayer();
 if (playerX < 0 ?? playerX )
}


 document.addEventListener('keydown', function(event) {
    //left
    if(event.keyCode == 37) {
        playerX -= 10;
    }
    //top
    else if(event.keyCode == 38) {
        playerY -= 10;
    }
    //right
    else if(event.keyCode == 39) {
        playerX += 10;
    }
    //bottom
    else if(event.keyCode == 40) {
        playerY += 10;
    }
    });
    







setInterval(draw, 10);