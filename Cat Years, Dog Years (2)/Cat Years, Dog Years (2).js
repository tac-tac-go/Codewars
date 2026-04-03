const ownedCatAndDog = function(catYears, dogYears) {
  const h1 = (catYears>14) + (catYears>23) + Math.max(0,Math.floor((catYears-24)/4))
  const h2 = (dogYears>14) + (dogYears>23) + Math.max(0,Math.floor((dogYears-24)/5))
  return [h1,h2]
}

