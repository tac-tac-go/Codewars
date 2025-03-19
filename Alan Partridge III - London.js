function alan(x){
  const fil1 = x.filter(v => v==='Rejection').length>=1
  const fil2 = x.filter(v => v==='Disappointment').length>=1
  const fil3 = x.filter(v => v==='Backstabbing Central').length>=1
  const fil4 = x.filter(v => v==='Shattered Dreams Parkway').length>=1
  return fil1 && fil2 && fil3 && fil4 ? "Smell my cheese you mother!" : "No, seriously, run. You will miss it."
}
