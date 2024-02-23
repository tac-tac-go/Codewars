function hasUniqueChars(str){
  return Array.from(new Set(str.split(""))).length === str.split("").length
}
