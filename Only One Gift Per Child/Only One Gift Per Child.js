let result = []
function handOutGift(name) {
  if(result.includes(name)){
    throw new Error("")
  }else{
    result.push(name)
  }
}
