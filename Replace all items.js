function replaceAll(seq, find, replace) {
  const type_c = typeof(seq) === "string";
  if(type_c){
    return seq.replaceAll(find,replace)
  }else{
    return seq.map(i => i===find ? replace : i)
  }
}
