const minMinMax =(array) => {
  const min = Math.min.apply(null,array)
  const max = Math.max.apply(null,array)
  for(let i=min+1;i<max;i++){
    if(array.indexOf(i)===-1){
      return [min,i,max]
    }
  }
}
