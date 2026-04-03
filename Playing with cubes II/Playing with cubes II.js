class Cube {
  constructor(side=0){
    this.side = side;
  }
  
  getSide() {
    return Math.abs(this.side); 
  }
  setSide(n) {
    this.side = Math.abs(n);
  }
}
