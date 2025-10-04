const sing = () => {
  let result = []
  for(let i=99;i>0;i--){
    if(i>2){
      result.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`)
      result.push(`Take one down and pass it around, ${i-1} bottles of beer on the wall.`)
    }else if(i===2){
      result.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`)
      result.push(`Take one down and pass it around, ${i-1} bottle of beer on the wall.`)
    }else{
      result.push(`1 bottle of beer on the wall, 1 bottle of beer.`)
      result.push(`Take one down and pass it around, no more bottles of beer on the wall.`)
    }
  }
  result.push("No more bottles of beer on the wall, no more bottles of beer.")
  result.push("Go to the store and buy some more, 99 bottles of beer on the wall.")
  return result
}
