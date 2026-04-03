Array.prototype.filter = function (fn) {
  return this.reduce((s,a)=>fn(a)?(s.push(a),s):s,[]);
}

