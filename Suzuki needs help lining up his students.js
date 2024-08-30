const funcCompare = (a,b) => {
  if (a[0] < b[0]) return 1;
  if (a[0] > b[0]) return -1;
  if (a[1] < b[1]) return 1;
  if (a[1] > b[1]) return -1;
  return 0;
}

function lineupStudents(students){
  let arr = students.split(" ").map(v => [v.length,v])
  return [...arr].sort(funcCompare).map(v => v[1])
}
