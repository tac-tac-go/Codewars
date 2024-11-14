const reverse = (str) => {
  return str.trim().split(/\s+/).map((v,i) => i%2==0 ? v : v.split("").reverse().join("")).join(" ")
}
