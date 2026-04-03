function squareUp(n)
{
    let result = []
    for(let i=0;i<n;i++){
      let tmp = Array.from({length:n}).fill(0)
      for(let j=0;j<=i;j++){
        tmp[j]=j+1
      }
      tmp.reverse()
      result.push(tmp)
    }
    return result.flat()
}
