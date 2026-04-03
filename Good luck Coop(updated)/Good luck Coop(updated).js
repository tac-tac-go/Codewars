function findSafeRoute(board, directions) {
  const grid = board.map(row => row.split(''));
  const vertical = grid[0].map((_, colIndex) => grid.map(row => row[colIndex]).join(''))
  const horizon = grid.map((row,i) => row.join(""))
  const ho_f = horizon.findIndex(v => v===directions)
  const ve_f = vertical.findIndex(v => v===directions)
  if(ho_f!==-1)return `Horizontal ${ho_f+1}`
  else if(ve_f!==-1)return `Vertical ${ve_f+1}`
  else return "Coop, it's too risky!"
}
