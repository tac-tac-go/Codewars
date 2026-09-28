type MoveDirection = 'left' | 'right';
type Direction = 'N' | 'S' | 'E' | 'W';

export function turn(current: Direction, target: Direction): MoveDirection {
  if(current==='N'){
    if(target==='E'){
      return "right"
    }else{
      return "left"
    }
  }else if(current=='S'){
    if(target==='E'){
      return "left"
    }else{
      return "right"
    }
  }else if(current=='E'){
    if(target==='N'){
      return "left"
    }else{
      return "right"
    }
  }
  else{
    if(target==='N'){
      return "right"
    }else{
      return "left"
    }
  }
}
