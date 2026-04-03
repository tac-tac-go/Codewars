Array.prototype.sortReloaded = function(dir='asc'){
  if(dir==='asc'){
    return [...this].sort((a,b) => a-b)
  }else if(dir==='desc'){
    return [...this].sort((a,b) => b-a)
  }else{
    return false
  }
}
