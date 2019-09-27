const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let balls = [];
let maxPoints = 4;

for(let i=0; i< maxPoints ; i++)
{
  let  ball = new Point(new Vector2d(getRandom(width),getRandom(height)),20,"red");
  balls.push(ball)
}

function animate(){
	requestAnimationFrame(animate);
    for(let i = 0; i < balls.length; i++)
    {
      balls[i].draw(context);
    }
      context.beginPath();
      context.moveTo(balls[0].position.dx, balls[0].position.dy);

      for (let i = 0; i < balls.length; i++) {
        context.lineTo(balls[i].position.dx, balls[i].position.dy);
        context.fillStyle = "rgba(0,255,0,0.3)";
        context.strokeStyle = "Black";
      }
      context.closePath();
      context.fill();
      context.stroke();
}
animate();

function getRandom(max)
{
  return Math.floor(Math.random()*max);
}
