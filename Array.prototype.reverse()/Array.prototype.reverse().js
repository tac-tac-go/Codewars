Array.prototype.reverse = function() {
  for(let i=0;i<Math.floor(this.length/2);i++){
    let tmp = this[i];
    this[i] = this[this.length -1 -i];
    this[this.length -1 -i] = tmp
  }
  return this
};
