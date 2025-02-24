Array.prototype.square = function(){
  let result = []
  for(let i=0;i<this.length;i++){
    result.push(this[i]**2)
  }
  return result
}

Array.prototype.cube = function(){
  let result = []
  for(let i=0;i<this.length;i++){
    result.push(this[i]**3)
  }
  return result
}

Array.prototype.sum = function(){
  return this.reduce((a,b) => a+b,0,)
}

Array.prototype.average = function(){
  return this.reduce((a,b) => a+b,0,)/this.length
}

Array.prototype.even = function(){
  return this.filter(v => v%2===0)
}

Array.prototype.odd = function(){
  return this.filter(v => v%2===1)
}
