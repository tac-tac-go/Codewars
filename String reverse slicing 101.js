function reverseSlice(str) {
  const rev_arr = [...str].reverse()
  return Array.from({length:str.length},(_,i) => rev_arr.slice(i,str.length).join(""))
}
