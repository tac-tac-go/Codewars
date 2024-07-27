const table = {"0":"0","7":"1","8":"2","9":"3","4":"4","5":"5","6":"6","1":"7","2":"8","3":"9"}
function computerToPhone(numbers){
  return numbers.split("").map(v => table[v]).join("")
}
