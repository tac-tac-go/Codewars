function countLanguages(list) {
  let count = {};
  for(let arr of list){
    count[arr['language']] =  count[arr['language']] ? count[arr['language']]+1 : 1;
  }
  return count
}
