console.log("main js loaded");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let x = 0;
let y = 0;
let vx = 0;
let vy = 0;



function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height );
    x += vx;
    y += vy;
    if (x < 0 || x + 50 > canvas.width) vx = -vx; // reverse direction if rectangle hits the edge
    if (y < 0 || y + 50 > canvas.height) vy = -vy; // reverse direction if rectangle hits the edge
    ctx.fillRect(x, y, 50, 50);
    requestAnimationFrame(update)
}

update();