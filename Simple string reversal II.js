function solve(st,a,b){
  let st_arr = st.split("")
  const values = st.slice(a,b+1).split("").reverse()
  index = 0
  for(let i=a;i<=b;i++){
    st_arr[i] = values[index]
    index+=1
  }
  return st_arr.join("")
}
  
