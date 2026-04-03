var paintLetterboxes = function(start, end) {
  let result = Array(10).fill(0)
  for(let i=start;i<=end;i++){
    for(let j of String(i).split("")){
      result[parseInt(j)]+=1
    }
  }
  return result;
}

