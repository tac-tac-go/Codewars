String.prototype.toCents=function(){
  return /^\$\d+\.\d{2}$/.test(this) ?  parseInt(this.slice(1,).replace(".","")) : null
}
