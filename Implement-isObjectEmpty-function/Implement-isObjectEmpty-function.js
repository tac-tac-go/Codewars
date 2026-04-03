const isObjectEmpty = (obj) => {
  return JSON.stringify(obj) === JSON.stringify({}) ? true : false
};
