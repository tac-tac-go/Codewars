const dative = (word) => {
  for(let tmp of word.split("").reverse()){
    console.log(tmp,/[eéiíöőüű]/.test(tmp))
    if(/[eéiíöőüű]/.test(tmp)){
      return word+"nek"
    }
    if(/[aáoóuú]/.test(tmp)){
      return word+"nak"
    }
  }
}
