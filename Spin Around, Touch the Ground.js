const spinAround = (turns) => Math.floor(Math.abs(turns.map(v => v==='right' ? 90 : -90).reduce((a,b) => a+b,0))/360)
