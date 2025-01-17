const stringTransformer = (s) => {
  return s.split(" ").reverse().map(text => text.split("").map(v => v === v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()).join("")).join(" ")
}
