
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(200,200),15,"red","A",true);
let B = new Point(new Vector2d(500,200),15,"blue","B",true);
let C = new Point(new Vector2d(350,500),15,"black","C",true);
let D = new Point(new Vector2d(350,100),15,"grey","D",true);
let S = new Point(new Vector2d(500,500),15,"White","S",false);
let l = new LinearFunction(1,1);
let l2 = new LinearFunction(2,2);



function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  l.defineLineWithTwoPoints(A,B);
  l2.defineLineWithTwoPoints(C,D);
  l.draw(context);
  l2.draw(context);
  S.position.dx = l.intersection(l2).x;
  S.position.dy = l2.intersection(l).y;
  A.draw(context);
  B.draw(context);
  C.draw(context);
  D.draw(context);
  S.draw(context);
}

animate();
