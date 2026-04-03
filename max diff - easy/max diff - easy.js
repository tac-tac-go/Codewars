function maxDiff(list) {
  return list.length > 0 ? Math.max.apply(null,list)-Math.min.apply(null,list) : 0;
};
