const initializeNames = (name) => {
  let arr = name.split(" ")
  if(arr.length<=2){
    return name
  }else{
    const f = arr.slice(0,1)[0]
    const l = arr.slice(arr.length-1,)[0]
    let m = arr.slice(1,arr.length-1).map(v => v[0]+".").join(" ")
    return `${f} ${m} ${l}`
  }
}
