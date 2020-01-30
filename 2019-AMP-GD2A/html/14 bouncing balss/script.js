const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let point = new DPoint(new Vector2d(Math.floor(Math.random() * 300),Math.floor(Math.random() * 100)),new Vector2d(1,3),new Vector2d(0,1),20,"gold","ball");
let point2 = new DPoint(new Vector2d(Math.floor(Math.random() * 300),Math.floor(Math.random() * 100)),new Vector2d(1,3),new Vector2d(0,1),20,"red","ball");
let point3 = new DPoint(new Vector2d(Math.floor(Math.random() * 300),Math.floor(Math.random() * 100)),new Vector2d(1,3),new Vector2d(0,1),20,"blue","ball");
let point4 = new DPoint(new Vector2d(Math.floor(Math.random() * 300),Math.floor(Math.random() * 100)),new Vector2d(1,3),new Vector2d(0,1),20,"silver","ball");
let point5 = new DPoint(new Vector2d(Math.floor(Math.random() * 300),Math.floor(Math.random() * 100)),new Vector2d(1,3),new Vector2d(0,1),20,"gold","ball");
let point6 = new DPoint(new Vector2d(Math.floor(Math.random() * 300),Math.floor(Math.random() * 100)),new Vector2d(1,3),new Vector2d(0,1),20,"red","ball");
let point7 = new DPoint(new Vector2d(Math.floor(Math.random() * 300),Math.floor(Math.random() * 100)),new Vector2d(1,3),new Vector2d(0,1),20,"blue","ball");
let point8 = new DPoint(new Vector2d(Math.floor(Math.random() * 300),Math.floor(Math.random() * 100)),new Vector2d(1,3),new Vector2d(0,1),20,"silver","ball");
let point9 = new DPoint(new Vector2d(Math.floor(Math.random() * 300),Math.floor(Math.random() * 100)),new Vector2d(1,3),new Vector2d(0,1),20,"green","ball");
let point10 = new DPoint(new Vector2d(Math.floor(Math.random() * 300),Math.floor(Math.random() * 100)),new Vector2d(1,3),new Vector2d(0,1),20,"green","ball");

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  point.update();
  point2.update();
  point3.update();
  point4.update();
  point5.update();
  point6.update();
  point7.update();
  point8.update();
  point9.update();
  point10.update();
  point.draw(context);
  point2.draw(context);
  point3.draw(context);
  point4.draw(context);
  point5.draw(context);
  point6.draw(context);
  point7.draw(context);
  point8.draw(context);
  point9.draw(context);
  point10.draw(context);
  point.vel.draw(context,point.pos,10);
  point2.vel.draw(context,point2.pos,10);
  point3.vel.draw(context,point3.pos,10);
  point4.vel.draw(context,point4.pos,10);
  point5.vel.draw(context,point5.pos,10);
  point6.vel.draw(context,point6.pos,10);
  point7.vel.draw(context,point7.pos,10);
  point8.vel.draw(context,point8.pos,10);
  point9.vel.draw(context,point9.pos,10);
  point10.vel.draw(context,point10.pos,10);
}

animate();
