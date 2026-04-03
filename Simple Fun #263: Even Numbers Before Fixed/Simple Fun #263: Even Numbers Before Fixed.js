function evenNumbersBeforeFixed(sequence, fixedElement) {
  const index =  sequence.findIndex(v => v===fixedElement)
  return index===-1 ? index : (sequence.slice(0,index).filter(v => v%2===0) || []).length
}
