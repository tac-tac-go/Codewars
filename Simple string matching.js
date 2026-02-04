function solve(a,b){
  if(!a.includes("*"))return a===b
  else{
    const index = a.indexOf("*")
    const prefix = a.slice(0,index)
    const suffix = a.slice(index+1,)
    return b.startsWith(prefix) && b.endsWith(suffix) && (prefix.length+suffix.length)<=b.length
  }  
}
