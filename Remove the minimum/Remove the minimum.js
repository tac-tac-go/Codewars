function removeSmallest(numbers) {
  let numbers2 = [...numbers]
  numbers2.splice(numbers2.indexOf(Math.min(...numbers2)),1);
  return numbers2
}
