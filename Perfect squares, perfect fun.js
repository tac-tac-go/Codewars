function squareIt(num) {
	const square = String(num).length**0.5
  if(square%1===0){
    let result = []
    let num_s = String(num)
    for(let i=0;i<num_s.length;i+=square){
      result.push(num_s.slice(i,i+square))
    }
    return result.join("\n")
  }else{
    return "Not a perfect square!"
  }
}
