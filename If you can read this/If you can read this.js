const toNato = (words) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let result = []
    const arr = words.split(" ");
    for(let s1 of arr){
      for(let s2 of s1){
        if(alphabet.includes(s2.toLowerCase())){
          result.push(NATO[s2.toUpperCase()])
        }else{
          result.push(s2)
        }
      }
    }
    return result.join(" ")
}
