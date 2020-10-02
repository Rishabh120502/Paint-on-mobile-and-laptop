canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent = "empty";
var last_position_x,last_position_y;
color="red";
width_of_line = 1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseUp";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseLeave";
}
canvas.addEventListener("mousemove",move);
function move(e){
current_position_x = e.clientX - canvas.getBoundingClientRect().left;
current_position_y = e.clientY - canvas.getBoundingClientRect().top;
if (mouseEvent=="mouseDown"){
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;
console.log("last position of x and y coordinates are;");
console.log("x= "+last_position_x +",y=" +last_position_y);
ctx.moveTo(last_position_x,last_position_y);
 console.log("current position of x and y coordinates are");
 console.log("x="+ current_position_x + ",y=" +current_position_y);
 ctx.lineTo(current_position_x,current_position_y);
 ctx.stroke();
}
last_position_x=current_position_x;
last_position_y=current_position_y;
}


var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
var width = screen.width;
new_width=width-70;
new_height=screen.height-300;
if(width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}
    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        

        console.log("touchstart");
        last_position_of_x=e.touches[0].clientX-canvas.getBoundingClientRect().left;
        last_position_of_y=e.touches[0].clientY-canvas.getBoundingClientRect().top;
    }

    
    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
console.log("touchmove");
         current_position_of_touch_x = e.touches[0].clientX-canvas.getBoundingClientRect().left;
         current_position_of_touch_y = e.touches[0].clientY-canvas.getBoundingClientRect().top;

       
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }