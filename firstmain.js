function nextpage1(){
window.location="secondpage.html";
}
var mouseEvent="";
var lastX;
var lastY;
canvas=document.getElementById("myCanvas");
veryimportant=canvas.getContext("2d");
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
mouseEvent="mousedown";
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",mymouseleaves);
function mymouseleaves(e){
mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
currentX=e.clientX-canvas.offsetLeft;
currentY=e.clientY-canvas.offsetTop;
if (mouseEvent=="mousedown") {
veryimportant.beginPath(); 
veryimportant.strokeStyle=document.getElementById("color").value;
veryimportant.lineWidth=document.getElementById("width").value;
veryimportant.moveTo(lastX,lastY);
veryimportant.lineTo(currentX,currentY);
veryimportant.stroke();
}
lastX=currentX;
lastY=currentY;
}
function nextpage2(){
window.location="thirdpage.html"
}

