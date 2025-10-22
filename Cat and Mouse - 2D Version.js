function catMouse(map,moves){
  if (map.indexOf('C') == -1 || map.indexOf('m') == -1) {
    return "boring without two animals";
  }
  
  map = map.split('\n');  
  let catPos = {x: 0, y: 0};
  let micePos = {x: 0, y: 0};
  
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] == 'C') {
        catPos.x = i;
        catPos.y = j;
      }
      
      if (map[i][j] == 'm') {
        micePos.x = i;
        micePos.y = j;
      }
    }
  }
  let movesToMice = Math.abs(micePos.x - catPos.x) + Math.abs(micePos.y - catPos.y);
  
  return movesToMice <= moves ? 'Caught!' : 'Escaped!';
}
