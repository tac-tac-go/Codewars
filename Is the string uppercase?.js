String.prototype.isUpperCase = function() {
  let result = ''
  for(let i=0;i<this.length;i++){
    result +=this[i]
  }
  return result.toUpperCase()==result ? true : false;
}
