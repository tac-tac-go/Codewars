function differences(a) {
  while(a.length > 1){
    const next = []
    for(let i=0;i<a.length-1;i++)next.push(Math.abs(a[i+1]-a[i]))
    a = next
  }
  return a[0]
}
