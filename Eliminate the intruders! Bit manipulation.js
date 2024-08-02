function eliminateUnsetBits(number) {
  let arr = number.split("").filter(v => v==="1")
  let arr_to_str = arr.length==0 ? "0" : arr.join("")
  return parseInt(arr_to_str,2)
}
