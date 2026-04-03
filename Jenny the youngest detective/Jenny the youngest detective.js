function missingWord(nums, str) {
  nums.sort((a,b) => a-b)
  const result = nums.map(v => str.replace(/\s/g,"").toLowerCase().slice(v,v+1))
  return result.every(v => v!=="") ? result.join("") : "No mission today"
}
