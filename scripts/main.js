let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let rightPressed = false;
let leftPressed = false;

let playerHeight = 20;
let playerWidth = 20;
let playerX = (500);
let playerY = (500);

function draw() {
    // clear the canvas
    ctx.clearRect(0,0, canvas.width, canvas.height);
    
    function drawPlayer() {
        ctx.beginPath();
        ctx.arc(playerX, playerY, 20, 0, Math.PI*2);
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

    // player movement y value
    if(upPressed) {
        playerY += 7;
    }
    else if(downPressed) {
        playerY -= 7;
    }

    drawPlayer();

}

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e){
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
      leftPressed = false;
    }
}
function keyRightHandler(e) {
    if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = true;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = true;
    }
}

function keyLeftHandler(e){
    if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = false;
    }
    else if(e.key == "Down" || e.key == "ArrowUp") {
        downPressed = false;
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("keyright", keyRightHandler, false);
document.addEventListener("keyleft", keyLeftHandler, false);

setInterval(draw, 10);