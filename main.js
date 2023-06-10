var mevent = "";
l_p_x = 0;
l_p_y = 0;

canvas = document.getElementById('miCanvas');
ctx = canvas.getContext("2d");

var width = screen.width;

new_width = screen.width - 70;
new_height = screen.height - 400;

var color = "black";
var lw = 3;

if (width <= 991){

    document.getElementById('miCanvas').width = new_width;
    document.getElementById('miCanvas').height = new_height;
    document.body.style.overflow = "hidden";

}
//main part of today's class//
canvas.addEventListener('touchstart', mtstart);

function mtstart(e){
    color = document.getElementById('colour').value;
    lw = document.getElementById('lnwd').value;

    l_p_x = e.touches[0].clientX - canvas.offsetLeft;
    l_p_y = e.touches[0].clientY - canvas.offsetTop;

}

//over half//

canvas.addEventListener("touchmove", mtmove);

function mtmove(e){

    c_tp_x = e.touches[0].clientX - canvas.offsetLeft;
    c_tp_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = lw;
    ctx.moveTo(l_p_x,l_p_y);
    ctx.lineTo(c_tp_x, c_tp_y);
    ctx.stroke();

    l_p_x = c_tp_x;
    l_p_y = c_tp_y;

}




function clearit(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

