function printStars(rows, columns) {
  if(rows<=0 || columns<=0){
    return ''
  }else if(rows==1 && columns==0){
    return ("*".repeat(columns))
  }else{
    var output = ("*".repeat(columns).concat("\n")).repeat(rows);
    output = output.slice(0,output.length-1)
    return output; 
  }
}
