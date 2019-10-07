class LinearFunction {
  constructor(slope,intercept) {
    this.slope = slope;
    this.intercept = intercept;
  }

  y(x){
    return x * this.slope + this.intercept;
  }

  defineLineWithTwoPoints(A,B){
    this.slope = (B.position.dy-A.position.dy)/(B.position.dx-A.position.dx);
    this.intercept = A.position.dy - A.position.dx * this.slope;
    console.log('dus',this.slope,this.intercept);
  }

  draw(context){
    context.beginPath();
    context.moveTo(0,this.y(0));
    context.lineTo(width,this.y(width));
    context.closePath()
    context.stroke();
  }
  intersection(m){
    let ans = {};
    ans.x = (m.intercept-this.intercept)/(this.slope-m.slope);
    ans.y = this.y(ans.x);
    return ans;
  }
}
