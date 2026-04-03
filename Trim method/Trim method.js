String.prototype.trim = function(c){
  if(c === undefined) c = ' '
  return this.replace(new RegExp(`^${c}*|${c}*$`, 'ig'), '');
}
