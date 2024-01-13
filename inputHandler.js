addEventListener("keydown",function(e){
    if(e.code === 'KeyD'){vx = 5; }
    if(e.code === 'KeyA'){vx = -5;}
    if(e.code === 'KeyS'){vy = 5;}
    if(e.code === 'KeyW'){vy = -5;}
});

addEventListener("keyup",function(e){
    if(e.code ==='keyD'){vx = 0; }
    if(e.code ==='keyA'){vx = 0; }
    if(e.code === 'KeyS'){vy = 0;}
    if(e.code === 'KeyW'){vy = 0;}

})