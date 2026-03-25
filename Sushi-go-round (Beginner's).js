const totalBill = (str) => {
  const count = str.split('').filter(v => v === 'r').length;
  const free = Math.floor(count / 5);
  return (count - free) * 2;
};
