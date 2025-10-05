function ranking(people) {
  const arr_c = [...people]
  arr_c.sort((a,b) => b.points - a.points || a.name.localeCompare(b.name))
  arr_c.map((v,index) => {
    v['position']=ranksSorted(arr_c.map(v => v.points))[index]
  })
  return arr_c
}

function ranksSorted(scores) {
  const pos = [];
  for (let i = 0; i < scores.length; i++) {
    pos.push(i > 0 && scores[i] === scores[i - 1] ? pos[i - 1] : i + 1);
  }
  return pos;
}
