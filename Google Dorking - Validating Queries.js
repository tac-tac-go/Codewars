function isValid(query) {
  return query.split(" ").every(v => {
    if (!v.includes(":")) return true;
    const filterName = v.split(":")[0];
    return FILTERS.includes(filterName);
  });
}
