const data = {
  "A":"T",
  "T":"A",
  "C":"G",
  "G":"C"
}

function DNAStrand(dna){
  let result=""
  for(let s of dna){
    if(Object.keys(data).indexOf(s)!==-1){
      result+=data[s]
    }else{
      result+=s
    }
  }
  return result;
}
