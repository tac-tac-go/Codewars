function scrollingText(text){
  text = text.toUpperCase()
  return [...Array(text.length).keys()].map(i => text.slice(i,)+text.slice(0,i))
}


