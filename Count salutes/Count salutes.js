function countSalutes(hallway) {
  let rightCount = 0;
  let meetings = 0;
  for (const c of hallway) {
    if (c === '>') rightCount++;
    else if (c === '<') meetings += rightCount;
  }
  return meetings * 2;
}
