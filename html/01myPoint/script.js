const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

function animate()
{
  requestAnimationFrame(animate);
  let color = "rgb(" + getRandom(255) +"," + getRandom(255) + "," + getRandom(255) + ")"
  let A = new Point(new Vector2d(getRandom(width),getRandom(height)),100,color);
  A.draw(context)

}

animate()

function getRandom(max)
{
  let ans = Math.floor(Math.random()*max);
  return ans;
}
