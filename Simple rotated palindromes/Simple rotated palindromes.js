function solve(st){
    for(let i=0;i<st.length;i++){
      st = st.slice(1,)+st.slice(0,1)
      let arr = st.split("")
      if([...arr].reverse().join("")===arr.join("")){
        return true
      }
    }
    return false
}
