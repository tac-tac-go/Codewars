function getStrings(city){
  city = city.toLowerCase().replaceAll(" ","")
  let count = []
  city.split("").map(val => count[val] = (count[val] || 0)  + 1);
  let result = []
  for(let [key,value] of Object.entries(count)){
    result.push(`${key}:${"*".repeat(value)}`)
  }
  return result.join(",")
}
