export function counter(): Function {
  let count = 0;
  return () => {
    count+=1
    return count
  };
};
