let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let rightPressed = false;
let leftPressed = false;

let playerHeight = 30;
let playerWidth = 30;
let playerX = (30) /2;

function draw() {
    
    function drawPlayer() {
        ctx.beginPath();
        ctx.arc(350, 350, playerWidth, 0, Math.PI*2);
        ctx.fillStyle = "blue"
        ctx.fill();
        ctx.closePath();
    }

    // player movement 
    if(rightPressed) {
        playerX +- 7;
    }
    else if(leftPressed) {
        playerX -= 7;
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

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

setInterval(draw, 10);