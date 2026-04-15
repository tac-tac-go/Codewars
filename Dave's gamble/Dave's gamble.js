function horses(n) {
  if(!Number.isInteger(n))return undefined
  if(n<3)return n
  else return n*(n-1)*(n-2)
}
