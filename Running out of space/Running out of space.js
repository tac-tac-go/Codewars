function spacey(array) {
  return array.map((e,i) => array.slice(0,i+1).join(""))
}
