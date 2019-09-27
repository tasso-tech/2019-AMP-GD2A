const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let f = new LinearFunction(-0.2,200);



let A = new Point(new Vector2d(200,200),10,"blue");
let B = new Point(new Vector2d(500,300),10,"red");

A.draw(context); B.draw(context);

for(let x = 0; x < width ; x+= 10){
  let point = new Point(new Vector2d(x, f.y(x)),5,"yellow");
  point.draw(context);
}
