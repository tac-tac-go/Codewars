Array.prototype.remove = function(index) {
  if (index >= 0) {
    this.splice(index, 1);
  }
  return this;
};
