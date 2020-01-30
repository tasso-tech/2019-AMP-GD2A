const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let midX = canvas.width/2;
let midY = canvas.height/2;
let mouse = {};
let rot = 0;

function animate(){
  requestAnimationFrame(animate);
  context.fillStyle = "rgba(50,255,71,0.2)";
  context.fillRect(0,0,canvas.width,canvas.height);
  context.save();
  context.translate(midX,midY);
  if(mouse.x > midX){
    rot = Math.atan((mouse.y - midY)/(mouse.x - midX));
  } else {
    rot = Math.atan((mouse.y - midY)/(mouse.x - midX)) - Math.PI;
  }
  context.rotate(rot);
  drawArrow(context);
  context.restore();
}

animate();

function drawArrow(context)
{
  let shaftHeight = 20;
  let shaftWidth = 100;
  let arrowHeight = 40;
  let arrowWidth = 40;

 context.fillStyle = "gold";

 context.save();


context.beginPath();
 context.moveTo(0,0);
 context.lineTo(0,shaftHeight/2);
 context.lineTo(shaftWidth,shaftHeight/2);
 context.lineTo(shaftWidth,arrowHeight/2);
 context.lineTo(shaftWidth + arrowWidth,0);
 context.lineTo(shaftWidth,-arrowHeight/2);
 context.lineTo(shaftWidth,-shaftHeight/2);
 context.lineTo(0,-shaftHeight/2);
 context.closePath();
 context.stroke();
 context.fill();

 context.restore();
}

addEventListener('mousemove',(evt)=>{
  mouse.x = evt.clientX;
  mouse.y = evt.clientY;
})
