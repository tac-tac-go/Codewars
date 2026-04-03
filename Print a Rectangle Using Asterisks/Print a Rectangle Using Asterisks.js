function getRectangleString(width, height) {
    let result = []
    for(let i=1;i<=height;i++){
      if(i==1 || i==height){
        result.push("*".repeat(width))
      }else{
        result.push("*"+" ".repeat(width-2)+"*")
      }
    }
    return result.join("\r\n")+"\r\n"
}
