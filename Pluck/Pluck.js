function pluck(objs, name) {
  return objs.map((obj) => Object.keys(obj).includes(name) ? obj[name]:undefined)
}
