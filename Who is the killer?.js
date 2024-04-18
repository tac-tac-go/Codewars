function killer(suspectInfo, dead) {
  return Object.entries(suspectInfo).filter(([key, val]) => dead.every(i => val.indexOf(i)!=-1))[0][0]
}
