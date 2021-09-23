let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let rightPressed = false;
let leftPressed = false;

function draw() {
    //draw the player
    ctx.beginPath();
    ctx.arc(350, 350, 30, 0, Math.PI*2);
    ctx.fillStyle = "purple"
    ctx.fill();
    ctx.closePath();
}
function keyDownHandler(e){
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if
    }
}
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

setInterval(draw, 10);