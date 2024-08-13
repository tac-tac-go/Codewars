const Calculator = {
  add: (arg1,arg2) => arg1+arg2,
  subtract: (arg1,arg2) => arg1-arg2,
  multiply: (arg1,arg2) => arg1*arg2,
  divide: (arg1,arg2) => arg2===0 ? false : arg1/arg2
};
