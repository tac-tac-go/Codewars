function mostFrequentItemCount(collection) {
  if(collection.length > 0){
    return Math.max.apply(null,collection.map(i => collection.filter(v => v==i).length))
  }
  return 0;
}


