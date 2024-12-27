const sort = (initialArray, sortingArray) =>
  initialArray.map((_, idx) => initialArray[sortingArray.indexOf(idx)]);
