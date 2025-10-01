function robot(skinScan) {
  for(let i=0;i<skinScan.length;i++)
    for(let j=0;j<skinScan[0].length;j++)
      if(skinScan[i][j]==='X')skinScan[i][j]='*'
  return skinScan
}
