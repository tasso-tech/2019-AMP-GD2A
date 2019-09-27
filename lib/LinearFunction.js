class LinearFunction {
  constructor(slope,intercept) {
    this.slope = slope;
    this.intercept = intercept;
  }

  y(x){
    return x * this.slope + this.intercept;
  }
}
