function convertHashToArray(hash){
  return Object.entries(hash).map(([key,value]) => [key,value])
}
