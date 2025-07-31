const bearFur = (bears) => {
  bears.sort()
  if(bears[0]==='black' && bears[1]==='black')return 'black'
  else if(bears[0]==='brown' && bears[1]==='brown')return 'brown'
  else if(bears[0]==='white' && bears[1]==='white')return 'white'
  else if(bears[0]==='black' && bears[1]==='brown')return 'dark brown'
  else if(bears[0]==='black' && bears[1]==='white')return 'grey'
  else if(bears[0]==='brown' && bears[1]==='white')return 'light brown'
  else return 'unknown'
};
