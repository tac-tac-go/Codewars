const solution = (str) => {
  let tmp = str.split("?")
  const arr = tmp.slice(tmp.length-1)[0].split("&")
  return Object.fromEntries(arr.map(v1 => v1.split("=").map(v2 => v2)))   
}
