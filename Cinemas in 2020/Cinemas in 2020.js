function maximumSeating(seats) {
  seats = [0,0].concat(seats).concat([0,0])
  let count = 0
  for(let i=2;i<seats.length-2;i++){
    if(seats[i]===0 && seats.slice(i-2,i).join(",")==="0,0" && seats.slice(i+1,i+3).join(",")==="0,0"){
      seats[i]=1
      count++;
    }
  }
  return count
}
