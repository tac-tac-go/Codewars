function naughtyOrNice(data) {
  let count = {}
  Object.values(data).map(tmp => Object.values(tmp).map(tmp2 => {
    count[tmp2] = (count[tmp2] || 0) + 1;
  }))
  return count['Nice']>=count['Naughty'] ? "Nice!" : "Naughty!";
}
