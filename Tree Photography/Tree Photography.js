function treePhotography(trees) {
  let h = 0;
  let left = 0;
  let right = 0;
  
  for(let i=0; i<trees.length; i++) {
    if (trees[i]>h) {
      h = trees[i];
      left++; 
    }   
  }
  h = 0;
  for(let i=trees.length-1; i>=0; i--) {
    if (trees[i] > h) {
      h = trees[i];
      right++;
    }
  }
  
  return left > right ? "left" : "right";
}
