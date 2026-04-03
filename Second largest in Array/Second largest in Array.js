const secondLargest = arr => {
  if (!Array.isArray(arr)) return
  const nums = arr.map(n => parseInt(n)).filter(n => !isNaN(n))
  const set = [...new Set(nums)]
  const [_, second] = set.sort((a, b) => b - a)
  return set.length > 1 ? second : undefined
}
