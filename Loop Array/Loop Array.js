function loopArr(arr, direction, steps) {
  for (let i = 0; i < steps; i++) {
    if (direction === 'right'){
      arr.unshift(arr.pop());
    };
    if (direction === 'left') {
       arr.push(arr.shift());
    };
  }
  return arr;
}

